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

// src/main.ts
var main_exports = {};
__export(main_exports, {
  getTracer: () => getTracer,
  shutdownTracers: () => shutdownTracers,
  withActiveSpan: () => withActiveSpan
});
module.exports = __toCommonJS(main_exports);

// src/constants.ts
var GET_TRACER = "__netlify__getTracer";
var SHUTDOWN_TRACERS = "__netlify__shutdownTracers";

// src/main.ts
var getTracer = (name, version) => {
  return globalThis[GET_TRACER]?.(name, version);
};
var shutdownTracers = async () => {
  return globalThis[SHUTDOWN_TRACERS]?.();
};
function withActiveSpan(tracer, name, optionsOrFn, contextOrFn, fn) {
  const func = typeof contextOrFn === "function" ? contextOrFn : typeof optionsOrFn === "function" ? optionsOrFn : fn;
  if (!func) {
    throw new Error("function to execute with active span is missing");
  }
  if (!tracer) {
    return func();
  }
  return tracer.withActiveSpan(name, optionsOrFn, contextOrFn, func);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getTracer,
  shutdownTracers,
  withActiveSpan
});
