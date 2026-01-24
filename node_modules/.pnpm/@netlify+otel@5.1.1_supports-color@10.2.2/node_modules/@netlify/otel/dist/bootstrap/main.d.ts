import { Instrumentation } from '@opentelemetry/instrumentation';
import { SpanProcessor } from '@opentelemetry/sdk-trace-node';

interface TracerProviderOptions {
    serviceName: string;
    serviceVersion: string;
    deploymentEnvironment: string;
    siteUrl: string;
    siteId: string;
    siteName: string;
    instrumentations?: Instrumentation[];
    spanProcessors?: SpanProcessor[];
}
declare const createTracerProvider: (options: TracerProviderOptions) => void;
declare const getBaseSpanProcessor: () => SpanProcessor;

export { type TracerProviderOptions, createTracerProvider, getBaseSpanProcessor };
