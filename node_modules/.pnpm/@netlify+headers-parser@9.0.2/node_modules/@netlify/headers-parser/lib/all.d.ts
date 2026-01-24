import type { Header, MinimalHeader } from './types.js';
export type { Header, MinimalHeader };
export declare const parseAllHeaders: ({ headersFiles, netlifyConfigPath, configHeaders, minimal, }: {
    headersFiles: undefined | string[];
    netlifyConfigPath?: undefined | string;
    configHeaders: undefined | MinimalHeader[];
    minimal: boolean;
}) => Promise<{
    headers: (MinimalHeader | Header)[];
    errors: Error[];
}>;
