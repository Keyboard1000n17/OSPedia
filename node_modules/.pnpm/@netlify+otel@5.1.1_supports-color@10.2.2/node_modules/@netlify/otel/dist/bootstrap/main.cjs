"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);

// src/bootstrap/main.ts
var main_exports = {};
__export(main_exports, {
  createTracerProvider: () => createTracerProvider,
  getBaseSpanProcessor: () => getBaseSpanProcessor
});
module.exports = __toCommonJS(main_exports);
var import_node_process = __toESM(require("process"), 1);
var import_api2 = require("@opentelemetry/api");
var import_experimental = require("@opentelemetry/api/experimental");
var import_resources = require("@opentelemetry/resources");
var import_instrumentation = require("@opentelemetry/instrumentation");
var import_core2 = require("@opentelemetry/core");
var import_sdk_trace_node = require("@opentelemetry/sdk-trace-node");

// src/constants.ts
var GET_TRACER = "__netlify__getTracer";
var SHUTDOWN_TRACERS = "__netlify__shutdownTracers";
var TRACE_PREFIX = "__nfOTLPTrace";

// src/exporters/netlify.ts
var import_api = require("@opentelemetry/api");
var import_core = require("@opentelemetry/core");
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

// package.json
var package_default = {
  name: "@netlify/otel",
  version: "5.1.1",
  type: "module",
  engines: {
    node: "^18.14.0 || >=20.6.1"
  },
  main: "./dist/main.cjs",
  module: "./dist/main.js",
  types: "./dist/main.d.ts",
  exports: {
    ".": {
      require: {
        types: "./dist/main.d.cts",
        default: "./dist/main.cjs"
      },
      import: {
        types: "./dist/main.d.ts",
        default: "./dist/main.js"
      },
      default: {
        types: "./dist/main.d.ts",
        default: "./dist/main.js"
      }
    },
    "./package.json": "./package.json",
    "./bootstrap": {
      require: {
        types: "./dist/bootstrap/main.d.cts",
        default: "./dist/bootstrap/main.cjs"
      },
      import: {
        types: "./dist/bootstrap/main.d.ts",
        default: "./dist/bootstrap/main.js"
      },
      default: {
        types: "./dist/bootstrap/main.d.ts",
        default: "./dist/bootstrap/main.js"
      }
    },
    "./exporter-netlify": {
      require: {
        types: "./dist/exporters/netlify.d.cts",
        default: "./dist/exporters/netlify.cjs"
      },
      import: {
        types: "./dist/exporters/netlify.d.ts",
        default: "./dist/exporters/netlify.js"
      },
      default: {
        types: "./dist/exporters/netlify.d.ts",
        default: "./dist/exporters/netlify.js"
      }
    },
    "./instrumentation-fetch": {
      require: {
        types: "./dist/instrumentations/fetch.d.cts",
        default: "./dist/instrumentations/fetch.cjs"
      },
      import: {
        types: "./dist/instrumentations/fetch.d.ts",
        default: "./dist/instrumentations/fetch.js"
      },
      default: {
        types: "./dist/instrumentations/fetch.d.ts",
        default: "./dist/instrumentations/fetch.js"
      }
    },
    "./instrumentation-http": {
      require: {
        types: "./dist/instrumentations/http.d.cts",
        default: "./dist/instrumentations/http.cjs"
      },
      import: {
        types: "./dist/instrumentations/http.d.ts",
        default: "./dist/instrumentations/http.js"
      },
      default: {
        types: "./dist/instrumentations/http.d.ts",
        default: "./dist/instrumentations/http.js"
      }
    },
    "./opentelemetry": {
      require: {
        types: "./dist/opentelemetry.d.cts",
        default: "./dist/opentelemetry.cjs"
      },
      import: {
        types: "./dist/opentelemetry.d.ts",
        default: "./dist/opentelemetry.js"
      },
      default: {
        types: "./dist/opentelemetry.d.ts",
        default: "./dist/opentelemetry.js"
      }
    }
  },
  files: [
    "dist/**/*"
  ],
  scripts: {
    build: "tsup-node",
    dev: "tsup-node --watch",
    prepack: "npm run build",
    test: "run-s build test:ci",
    "test:dev": "run-s build test:dev:*",
    "test:ci": "run-s build test:ci:*",
    "test:dev:vitest": "vitest",
    "test:dev:vitest:watch": "vitest watch",
    "test:ci:vitest": "vitest run",
    publint: "npx -y publint --strict"
  },
  keywords: [
    "netlify",
    "cdn"
  ],
  license: "MIT",
  repository: {
    type: "git",
    url: "https://github.com/netlify/primitives.git",
    directory: "packages/otel"
  },
  bugs: {
    url: "https://github.com/netlify/primitives/issues"
  },
  author: "Netlify Inc.",
  devDependencies: {
    "@netlify/dev-utils": "^4.3.3",
    msw: "^2.10.5",
    "npm-run-all2": "^7.0.2",
    tsup: "^8.0.0",
    vitest: "^3.0.0"
  },
  dependencies: {
    "@opentelemetry/api": "1.9.0",
    "@opentelemetry/core": "1.30.1",
    "@opentelemetry/instrumentation": "^0.203.0",
    "@opentelemetry/resources": "1.30.1",
    "@opentelemetry/sdk-trace-node": "1.30.1"
  }
};

// src/bootstrap/main.ts
var createTracerProvider = (options) => {
  if (Object.prototype.hasOwnProperty.call(globalThis, GET_TRACER)) return;
  const runtimeVersion = import_node_process.default.version.slice(1);
  const resource = new import_resources.Resource({
    "service.name": options.serviceName,
    "service.version": options.serviceVersion,
    "process.runtime.name": "nodejs",
    "process.runtime.version": runtimeVersion,
    "deployment.environment": options.deploymentEnvironment,
    "http.url": options.siteUrl,
    "netlify.site.id": options.siteId,
    "netlify.site.name": options.siteName
  });
  const spanProcessors = options.spanProcessors ?? [getBaseSpanProcessor()];
  const nodeTracerProvider = new import_sdk_trace_node.NodeTracerProvider({
    resource,
    spanProcessors
  });
  nodeTracerProvider.register({
    propagator: new import_core2.W3CTraceContextPropagator()
  });
  const instrumentations = options.instrumentations ?? [];
  (0, import_instrumentation.registerInstrumentations)({
    instrumentations,
    tracerProvider: nodeTracerProvider
  });
  Object.defineProperty(globalThis, GET_TRACER, {
    enumerable: false,
    configurable: true,
    writable: false,
    value: function getTracer(name, version) {
      if (name) {
        return new import_experimental.SugaredTracer(import_api2.trace.getTracer(name, version));
      }
      return new import_experimental.SugaredTracer(import_api2.trace.getTracer(package_default.name, package_default.version));
    }
  });
  Object.defineProperty(globalThis, SHUTDOWN_TRACERS, {
    enumerable: false,
    configurable: true,
    writable: false,
    value: async () => {
      return await nodeTracerProvider.shutdown();
    }
  });
};
var getBaseSpanProcessor = () => {
  return new import_sdk_trace_node.SimpleSpanProcessor(new NetlifySpanExporter());
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createTracerProvider,
  getBaseSpanProcessor
});
