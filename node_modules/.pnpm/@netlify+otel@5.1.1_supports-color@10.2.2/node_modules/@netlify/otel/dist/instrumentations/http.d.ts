import { ClientRequest, IncomingMessage } from 'http';
import * as api from '@opentelemetry/api';
import { SugaredTracer } from '@opentelemetry/api/experimental';
import { InstrumentationConfig, Instrumentation } from '@opentelemetry/instrumentation';

interface HttpInstrumentationConfig extends InstrumentationConfig {
    getRequestAttributes?(request: ClientRequest): api.Attributes;
    getResponseAttributes?(response: IncomingMessage): api.Attributes;
    skipURLs?: (string | RegExp)[];
    skipHeaders?: (string | RegExp)[] | true;
    redactHeaders?: (string | RegExp)[] | true;
}
declare class HttpInstrumentation implements Instrumentation {
    instrumentationName: string;
    instrumentationVersion: string;
    private config;
    private provider?;
    private _channelSubs;
    private _recordFromReq;
    constructor(config?: {});
    getConfig(): HttpInstrumentationConfig;
    setConfig(): void;
    setMeterProvider(): void;
    setTracerProvider(provider: api.TracerProvider): void;
    getTracerProvider(): api.TracerProvider | undefined;
    private annotateFromRequest;
    private annotateFromResponse;
    private prepareHeaders;
    private getRequestMethod;
    getTracer(): SugaredTracer | undefined;
    enable(): void;
    disable(): void;
    private onRequest;
    private onResponse;
    private onError;
    private subscribe;
}

export { HttpInstrumentation, type HttpInstrumentationConfig };
