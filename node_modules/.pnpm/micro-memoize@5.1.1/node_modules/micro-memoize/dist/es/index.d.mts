import type { Memoize } from './internalTypes.d.mts';
export type * from './internalTypes.d.mts';
export declare const memoize: Memoize;
export { clearStats, isCollectingStats, getStats, startCollectingStats, stopCollectingStats } from './stats.d.mts';
