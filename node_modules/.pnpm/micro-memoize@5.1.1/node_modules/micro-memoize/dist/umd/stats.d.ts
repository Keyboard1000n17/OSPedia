import { Cache } from './Cache.js';
import type { GlobalStats, ProfileStats } from './internalTypes.js';
interface ProfileCounts {
    c: number;
    h: number;
}
export declare class StatsManager<Fn extends (...args: any[]) => any> {
    /**
     * The [c]ache listened to when collecting counts.
     */
    c: Cache<Fn>;
    /**
     * Method to [d]elete existing cache listeners.
     */
    d: (() => void) | undefined;
    /**
     * The [n]ame of the profile to manage in stats.
     */
    n: string;
    /**
     * The counts for the stats [p]rofile.
     */
    p: ProfileCounts;
    constructor(cache: Cache<Fn>, statsName: string);
    /**
     * Method to compute the [m]etrics for the profile stats.
     */
    m(): ProfileStats;
    /**
     * Method to [r]eset the counts.
     */
    r(): void;
    /**
     * Method to [s]tart the collection of stats for the given profile.
     */
    s(): void;
}
/**
 * Clear all existing stats stored, either of the specific profile whose name is passed,
 * or globally if no name is passed.
 */
export declare function clearStats(statsName?: string): void;
/**
 * Get the stats of a given profile, or global stats if no `statsName` is given.
 */
export declare function getStats<Name extends string | undefined>(statsName?: Name): undefined extends Name ? GlobalStats | undefined : ProfileStats | undefined;
/**
 * Whether stats are currently being collected.
 */
export declare function isCollectingStats(): boolean;
/**
 * Start collecting stats.
 */
export declare function startCollectingStats(): void;
/**
 * Stop collecting stats.
 */
export declare function stopCollectingStats(): void;
export {};
