import type { Header, MinimalHeader } from './types.js';
export declare const mergeHeaders: ({ fileHeaders, configHeaders, }: {
    fileHeaders: MinimalHeader[] | Header[];
    configHeaders: MinimalHeader[] | Header[];
}) => {
    headers: (MinimalHeader | Header)[];
    errors: Error[];
};
