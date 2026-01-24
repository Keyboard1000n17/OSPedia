"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);

// src/exporters/netlify.ts
var netlify_exports = {};
__export(netlify_exports, {
  NetlifySpanExporter: () => NetlifySpanExporter,
  serializeSpans: () => serializeSpans,
  toAttributes: () => toAttributes
});
module.exports = __toCommonJS(netlify_exports);
var import_api = require("@opentelemetry/api");
var import_core = require("@opentelemetry/core");

// src/constants.ts
var TRACE_PREFIX = "__nfOTLPTrace";

// src/exporters/netlify.ts
var _shutdownOnce, _logger, _NetlifySpanExporter_instances, shutdown_fn;
var NetlifySpanExporter = class {
  constructor() {
    __privateAdd(this, _NetlifySpanExporter_instances);
    __privateAdd(this, _shutdownOnce);
    __privateAdd(this, _logger);
    __privateSet(this, _shutdownOnce, new import_core.BindOnceFuture(__privateMethod(this, _NetlifySpanExporter_instances, shutdown_fn), this));
    __privateSet(this, _logger, import_api.diag.createComponentLogger({
      namespace: "netlify-span-exporter"
    }));
  }
  /** Export spans. */
  export(spans, resultCallback) {
    __privateGet(this, _logger).debug(`export ${spans.length.toString()} spans`);
    if (__privateGet(this, _shutdownOnce).isCalled) {
      resultCallback({
        code: import_core.ExportResultCode.FAILED,
        error: new Error("Exporter has been shutdown")
      });
      return;
    }
    console.log(TRACE_PREFIX, JSON.stringify(serializeSpans(spans)));
    resultCallback({ code: import_core.ExportResultCode.SUCCESS });
  }
  /**
   * Shutdown the exporter.
   */
  shutdown() {
    return __privateGet(this, _shutdownOnce).call();
  }
};
_shutdownOnce = new WeakMap();
_logger = new WeakMap();
_NetlifySpanExporter_instances = new WeakSet();
/**
 * Called by #shutdownOnce with BindOnceFuture
 */
shutdown_fn = function() {
  __privateGet(this, _logger).debug("Shutting down");
  return Promise.resolve();
};
function serializeSpans(spans) {
  return {
    resourceSpans: spans.map((span) => {
      const spanContext = span.spanContext();
      return {
        resource: {
          attributes: toAttributes(span.resource.attributes),
          droppedAttributesCount: span.droppedAttributesCount
        },
        scopeSpans: [
          {
            scope: {
              name: span.instrumentationLibrary.name,
              version: span.instrumentationLibrary.version
            },
            spans: [
              {
                traceId: spanContext.traceId,
                spanId: spanContext.spanId,
                parentSpanId: span.parentSpanId,
                name: span.name,
                kind: span.kind || import_api.SpanKind.SERVER,
                startTimeUnixNano: hrTimeToNanos(span.startTime),
                endTimeUnixNano: hrTimeToNanos(span.endTime),
                attributes: toAttributes(span.attributes),
                droppedAttributesCount: span.droppedAttributesCount,
                events: span.events.map((event) => ({
                  name: event.name,
                  timeUnixNano: hrTimeToNanos(event.time),
                  attributes: toAttributes(event.attributes ?? {}),
                  droppedAttributesCount: event.droppedAttributesCount ?? 0
                })),
                droppedEventsCount: span.droppedEventsCount,
                status: {
                  code: span.status.code,
                  message: span.status.message
                },
                links: span.links.map((link) => ({
                  spanId: link.context.spanId,
                  traceId: link.context.traceId,
                  attributes: toAttributes(link.attributes ?? {}),
                  droppedAttributesCount: link.droppedAttributesCount ?? 0
                })),
                droppedLinksCount: span.droppedLinksCount
              }
            ]
          }
        ]
      };
    })
  };
}
function toAttributes(attributes) {
  return Object.keys(attributes).map((key) => toKeyValue(key, attributes[key]));
}
function toKeyValue(key, value) {
  return {
    key,
    value: toAnyValue(value)
  };
}
function toAnyValue(value) {
  const t = typeof value;
  if (t === "string") return { stringValue: value };
  if (t === "number") {
    if (!Number.isInteger(value)) return { doubleValue: value };
    return { intValue: value };
  }
  if (t === "boolean") return { boolValue: value };
  if (value instanceof Uint8Array) return { bytesValue: value };
  if (Array.isArray(value)) return { arrayValue: { values: value.map(toAnyValue) } };
  if (t === "object" && value != null)
    return {
      kvlistValue: {
        values: Object.entries(value).map(([k, v]) => toKeyValue(k, v))
      }
    };
  return {};
}
function hrTimeToNanos(hrTime) {
  const NANOSECONDS = BigInt(1e9);
  const nanos = BigInt(Math.trunc(hrTime[0])) * NANOSECONDS + BigInt(Math.trunc(hrTime[1]));
  return nanos.toString();
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  NetlifySpanExporter,
  serializeSpans,
  toAttributes
});
