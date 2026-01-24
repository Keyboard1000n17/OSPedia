import { AsyncLocalStorage } from 'node:async_hooks';
import type { CacheAPIContext } from './cache.js';
import type { Context } from './context.js';
import { OperationCounter } from './operation_counter.js';
export type FetchCall = {
    host: string;
    start: number;
    end?: number;
};
export interface RequestStoreContent {
    cacheAPI: CacheAPIContext;
    cdnLoopHeader: string | null;
    context: Context;
    operationCounter: OperationCounter;
    fetchCalls: FetchCall[];
}
export declare const requestStore: AsyncLocalStorage<RequestStoreContent>;
