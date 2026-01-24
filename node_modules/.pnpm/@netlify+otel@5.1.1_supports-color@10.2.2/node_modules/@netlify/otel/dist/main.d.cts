import { Span, Context } from '@opentelemetry/api';
import { SugaredTracer, SugaredSpanOptions } from '@opentelemetry/api/experimental';

declare const getTracer: (name?: string, version?: string) => SugaredTracer | undefined;
declare const shutdownTracers: () => Promise<void>;
declare function withActiveSpan<F extends (span?: Span) => ReturnType<F>>(tracer: SugaredTracer | undefined, name: string, fn: F): ReturnType<F>;
declare function withActiveSpan<F extends (span?: Span) => ReturnType<F>>(tracer: SugaredTracer | undefined, name: string, options: SugaredSpanOptions, fn: F): ReturnType<F>;
declare function withActiveSpan<F extends (span?: Span) => ReturnType<F>>(tracer: SugaredTracer | undefined, name: string, options: SugaredSpanOptions, context: Context, fn: F): ReturnType<F>;

export { getTracer, shutdownTracers, withActiveSpan };
