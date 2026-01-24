// src/instrumentations/http.ts
import * as diagnosticsChannel from "diagnostics_channel";
import * as api from "@opentelemetry/api";
import { SugaredTracer } from "@opentelemetry/api/experimental";
var HttpInstrumentation = class {
  constructor(config = {}) {
    this.instrumentationName = "@netlify/otel/instrumentation-http";
    this.instrumentationVersion = "1.0.0";
    this._recordFromReq = /* @__PURE__ */ new WeakMap();
    this.config = config;
    this._channelSubs = [];
  }
  getConfig() {
    return this.config;
  }
  setConfig() {
  }
  setMeterProvider() {
  }
  setTracerProvider(provider) {
    this.provider = provider;
  }
  getTracerProvider() {
    return this.provider;
  }
  annotateFromRequest(span, request) {
    const extras = this.config.getRequestAttributes?.(request) ?? {};
    const url = new URL(request.path, `${request.protocol}//${request.host}`);
    span.setAttributes({
      ...extras,
      "http.request.method": request.method,
      "url.full": url.href,
      "url.host": url.host,
      "url.scheme": url.protocol.slice(0, -1),
      "server.address": url.hostname,
      ...this.prepareHeaders("request", request.getHeaders())
    });
  }
  annotateFromResponse(span, response) {
    const extras = this.config.getResponseAttributes?.(response) ?? {};
    span.setAttributes({
      ...extras,
      "http.response.status_code": response.statusCode,
      ...this.prepareHeaders("response", response.headers)
    });
    span.setStatus({
      code: response.statusCode && response.statusCode >= 400 ? api.SpanStatusCode.ERROR : api.SpanStatusCode.UNSET
    });
  }
  prepareHeaders(type, headers) {
    if (this.config.skipHeaders === true) {
      return {};
    }
    const everything = ["*", "/.*/"];
    const skips = this.config.skipHeaders ?? [];
    const redacts = this.config.redactHeaders ?? [];
    const everythingSkipped = skips.some((skip) => everything.includes(skip.toString()));
    const attributes = {};
    if (everythingSkipped) return attributes;
    const entries = Object.entries(headers);
    for (const [key, value] of entries) {
      if (skips.some((skip) => typeof skip == "string" ? skip == key : skip.test(key))) {
        continue;
      }
      const attributeKey = `http.${type}.header.${key}`;
      if (redacts === true || redacts.some((redact) => typeof redact == "string" ? redact == key : redact.test(key))) {
        attributes[attributeKey] = "REDACTED";
      } else {
        attributes[attributeKey] = value;
      }
    }
    return attributes;
  }
  getRequestMethod(original) {
    const acceptedMethods = ["HEAD", "GET", "POST", "PUT", "PATCH", "DELETE"];
    if (acceptedMethods.includes(original.toUpperCase())) {
      return original.toUpperCase();
    }
    return "_OTHER";
  }
  getTracer() {
    if (!this.provider) {
      return void 0;
    }
    const tracer = this.provider.getTracer(this.instrumentationName, this.instrumentationVersion);
    if (tracer instanceof SugaredTracer) {
      return tracer;
    }
    return new SugaredTracer(tracer);
  }
  enable() {
    if (this._channelSubs.length > 0) return;
    this.subscribe("http.client.request.start", this.onRequest.bind(this));
    this.subscribe("http.client.response.finish", this.onResponse.bind(this));
    this.subscribe("http.client.request.error", this.onError.bind(this));
  }
  disable() {
    this._channelSubs.forEach((sub) => {
      sub.unsubscribe();
    });
    this._channelSubs.length = 0;
  }
  onRequest({ request }) {
    try {
      const tracer = this.getTracer();
      const url = new URL(request.path, `${request.protocol}//${request.host}`);
      if (!tracer || this.config.skipURLs?.some(
        (skip) => typeof skip == "string" ? url.href.startsWith(skip) : skip.test(url.href)
      )) {
        return;
      }
      const span = tracer.startSpan(
        this.getRequestMethod(request.method),
        {
          kind: api.SpanKind.CLIENT
        },
        api.context.active()
      );
      this.annotateFromRequest(span, request);
      this._recordFromReq.set(request, span);
    } catch {
    }
  }
  onResponse({ request, response }) {
    try {
      const span = this._recordFromReq.get(request);
      if (!span) return;
      this.annotateFromResponse(span, response);
      span.end();
      this._recordFromReq.delete(request);
    } catch {
    }
  }
  onError({ request, error }) {
    try {
      const span = this._recordFromReq.get(request);
      if (!span) return;
      span.recordException(error);
      span.setStatus({
        code: api.SpanStatusCode.ERROR,
        message: error.name
      });
      span.end();
      this._recordFromReq.delete(request);
    } catch {
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  subscribe(channelName, onMessage) {
    diagnosticsChannel.subscribe(channelName, onMessage);
    const unsubscribe2 = () => diagnosticsChannel.unsubscribe(channelName, onMessage);
    this._channelSubs.push({ name: channelName, unsubscribe: unsubscribe2 });
  }
};
export {
  HttpInstrumentation
};
