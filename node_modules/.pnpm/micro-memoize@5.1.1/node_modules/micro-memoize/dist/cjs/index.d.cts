import type { Memoize } from './internalTypes.d.cts';
export type * from './internalTypes.d.cts';
export declare const memoize: Memoize;
export { clearStats, isCollectingStats, getStats, startCollectingStats, stopCollectingStats } from './stats.d.cts';
