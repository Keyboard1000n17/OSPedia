import type { MinimalHeader } from './types.js';
export interface ParseHeadersResult {
    headers: MinimalHeader[];
    errors: Error[];
}
export declare const parseFileHeaders: (headersFile: string) => Promise<ParseHeadersResult>;
