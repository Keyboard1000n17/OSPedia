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
export {
  getTracer,
  shutdownTracers,
  withActiveSpan
};
