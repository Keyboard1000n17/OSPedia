import { Buffer } from 'buffer';
import type { Readable } from 'stream';
declare const createStreamPromise: (stream: Readable, timeoutSeconds: number, bytesLimit?: number) => Promise<Buffer>;
export default createStreamPromise;
//# sourceMappingURL=create-stream-promise.d.ts.map