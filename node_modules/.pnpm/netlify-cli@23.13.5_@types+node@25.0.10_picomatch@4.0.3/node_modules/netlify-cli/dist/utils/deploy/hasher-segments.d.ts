import { Transform, Writable } from 'node:stream';
import type { File, OriginalFile } from './file.js';
import type { StatusCallback } from './status-cb.js';
export declare const hasherCtor: ({ concurrentHash, hashAlgorithm }: {
    concurrentHash: any;
    hashAlgorithm: any;
}) => Transform;
export declare const fileNormalizerCtor: ({ assetType, normalizer: normalizeFunction, }: {
    assetType: string;
    normalizer?: (file: OriginalFile) => File;
}) => Transform;
export declare const manifestCollectorCtor: (filesObj: Record<string, unknown>, shaMap: Record<string, unknown[]>, { statusCb }: {
    statusCb: StatusCallback;
}) => Writable;
export declare const fileFilterCtor: () => Transform;
//# sourceMappingURL=hasher-segments.d.ts.map