import type { InvocationMetadata } from '../metadata.js';
export interface LambdaEvent {
    rawUrl: string;
    path: string;
    httpMethod: string;
    headers: Record<string, string>;
    body: string | undefined;
    isBase64Encoded: boolean;
    route?: string;
    aiGateway?: string;
    blobs?: string;
    flags?: Record<string, unknown>;
    initStartTimestamp?: number;
    invocationMetadata?: InvocationMetadata;
    logToken?: string;
    pcURL?: string;
    pcToken?: string;
    skewProtectionToken?: string;
}
