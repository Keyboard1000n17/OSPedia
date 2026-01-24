"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/opentelemetry.ts
var opentelemetry_exports = {};
__export(opentelemetry_exports, {
  BatchSpanProcessor: () => import_sdk_trace_node.BatchSpanProcessor,
  SimpleSpanProcessor: () => import_sdk_trace_node.SimpleSpanProcessor,
  SpanKind: () => import_api.SpanKind,
  SpanStatusCode: () => import_api.SpanStatusCode,
  W3CTraceContextPropagator: () => import_core.W3CTraceContextPropagator,
  context: () => import_api.context,
  propagation: () => import_api.propagation,
  trace: () => import_api.trace
});
module.exports = __toCommonJS(opentelemetry_exports);
var import_api = require("@opentelemetry/api");
var import_core = require("@opentelemetry/core");
var import_sdk_trace_node = require("@opentelemetry/sdk-trace-node");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BatchSpanProcessor,
  SimpleSpanProcessor,
  SpanKind,
  SpanStatusCode,
  W3CTraceContextPropagator,
  context,
  propagation,
  trace
});
