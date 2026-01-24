import * as api from '@opentelemetry/api';
import { InstrumentationConfig, Instrumentation } from '@opentelemetry/instrumentation';

interface FetchInstrumentationConfig extends InstrumentationConfig {
    getRequestAttributes?(request: FetchRequest): api.Attributes;
    getResponseAttributes?(response: FetchResponse): api.Attributes;
    skipURLs?: (string | RegExp)[];
    skipHeaders?: (string | RegExp)[] | true;
    redactHeaders?: (string | RegExp)[] | true;
}
declare class FetchInstrumentation implements Instrumentation {
    instrumentationName: string;
    instrumentationVersion: string;
    private config;
    private provider?;
    private _channelSubs;
    private _recordFromReq;
    constructor(config?: FetchInstrumentationConfig);
    getConfig(): FetchInstrumentationConfig;
    setConfig(): void;
    setMeterProvider(): void;
    setTracerProvider(provider: api.TracerProvider): void;
    getTracerProvider(): api.TracerProvider | undefined;
    private annotateFromRequest;
    private annotateFromResponse;
    private prepareHeaders;
    private getRequestMethod;
    private getTracer;
    enable(): void;
    private subscribe;
    disable(): void;
    private onRequestCreate;
    private onRequestHeaders;
    private onRequestError;
    private onRequestEnd;
}
interface FetchRequest {
    origin: string;
    method: string;
    path: string;
    headers: unknown;
    addHeader: (name: string, value: string) => void;
    throwOnError: boolean;
    completed: boolean;
    aborted: boolean;
    idempotent: boolean;
    contentLength: number | null;
    contentType: string | null;
    body: unknown;
}
interface FetchResponse {
    headers: unknown;
    statusCode: number;
    statusText: string;
}

export { FetchInstrumentation, type FetchInstrumentationConfig };
