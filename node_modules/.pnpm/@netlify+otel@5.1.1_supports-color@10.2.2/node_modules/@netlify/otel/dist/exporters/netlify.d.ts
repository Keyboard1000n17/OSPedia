import { ExportResult } from '@opentelemetry/core';
import { SpanExporter, ReadableSpan } from '@opentelemetry/sdk-trace-node';

declare class NetlifySpanExporter implements SpanExporter {
    #private;
    constructor();
    /** Export spans. */
    export(spans: ReadableSpan[], resultCallback: (result: ExportResult) => void): void;
    /**
     * Shutdown the exporter.
     */
    shutdown(): Promise<void>;
}
declare function serializeSpans(spans: ReadableSpan[]): Record<string, unknown>;
type IAnyValue = Record<string, number | boolean | string | object>;
declare function toAttributes(attributes: Record<string, unknown>): IAnyValue[];

export { NetlifySpanExporter, serializeSpans, toAttributes };
