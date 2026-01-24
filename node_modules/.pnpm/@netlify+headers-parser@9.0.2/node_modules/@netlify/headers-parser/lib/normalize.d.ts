import type { Header, MinimalHeader } from './types.js';
export interface MinimalNormalizedHeaders {
    headers: MinimalHeader[];
    errors: Error[];
}
export interface NormalizedHeaders {
    headers: Header[];
    errors: Error[];
}
export declare function normalizeHeaders(headers: MinimalHeader[], minimal: true): MinimalNormalizedHeaders;
export declare function normalizeHeaders(headers: MinimalHeader[], minimal: false): NormalizedHeaders;
export declare function normalizeHeaders(headers: MinimalHeader[], minimal: boolean): MinimalNormalizedHeaders | NormalizedHeaders;
