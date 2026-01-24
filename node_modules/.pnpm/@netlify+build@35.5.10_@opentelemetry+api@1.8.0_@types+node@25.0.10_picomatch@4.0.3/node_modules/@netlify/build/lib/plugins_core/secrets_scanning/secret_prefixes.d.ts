/**
 * Likely secret prefixes used for enhanced secret scanning.
 * Note: string comparison is case-insensitive so we use all lowercase here.
 */
export declare const LIKELY_SECRET_PREFIXES: string[];
/**
 * Known values that we do not want to trigger secret detection failures (e.g. common to framework build output)
 */
export declare const SAFE_LISTED_VALUES: string[];
