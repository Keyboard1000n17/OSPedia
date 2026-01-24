// src/opentelemetry.ts
import { context, propagation, trace, SpanKind, SpanStatusCode } from "@opentelemetry/api";
import { W3CTraceContextPropagator } from "@opentelemetry/core";
import { BatchSpanProcessor, SimpleSpanProcessor } from "@opentelemetry/sdk-trace-node";
export {
  BatchSpanProcessor,
  SimpleSpanProcessor,
  SpanKind,
  SpanStatusCode,
  W3CTraceContextPropagator,
  context,
  propagation,
  trace
};
