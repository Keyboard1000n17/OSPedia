export interface ScanResults {
    matches: MatchResult[];
    scannedFilesCount: number;
}
interface ScanArgs {
    env: Record<string, unknown>;
    keys: string[];
    base: string;
    filePaths: string[];
    enhancedScanning?: boolean;
    omitValuesFromEnhancedScan?: unknown[];
}
interface MatchResult {
    lineNumber: number;
    key: string;
    file: string;
    enhancedMatch: boolean;
}
export type SecretScanResult = {
    scannedFilesCount: number;
    secretsScanMatches: MatchResult[];
    enhancedSecretsScanMatches: MatchResult[];
};
/**
 * Determine if the user disabled scanning via env var
 * @param env current envars
 * @returns
 */
export declare function isSecretsScanningEnabled(env: Record<string, unknown>): boolean;
/**
 * Determine if the user disabled enhanced scanning via env var
 * @param env current envars
 * @returns
 */
export declare function isEnhancedSecretsScanningEnabled(env: Record<string, unknown>): boolean;
export declare function getStringArrayFromEnvValue(env: Record<string, unknown>, envVarName: string): string[];
export declare function getOmitValuesFromEnhancedScanForEnhancedScanFromEnv(env: Record<string, unknown>): unknown[];
/**
 * given the explicit secret keys and env vars, return the list of secret keys which have non-empty or non-trivial values. This
 * will also filter out keys passed in the SECRETS_SCAN_OMIT_KEYS env var.
 *
 * non-trivial values are values that are:
 *  - >4 characters/digits
 *  - not booleans
 *
 * @param env env vars list
 * @param secretKeys
 * @returns string[]
 */
export declare function getSecretKeysToScanFor(env: Record<string, unknown>, secretKeys: string[]): string[];
/**
 * Checks a chunk of text for likely secrets based on known prefixes and patterns.
 * The function works by:
 * 1. Splitting the chunk into tokens using quotes, whitespace, equals signs, colons, and commas as delimiters
 * 2. For each token, checking if it matches our secret pattern:
 *    - Must start (^) with one of our known prefixes (e.g. aws_, github_pat_, etc)
 *    - Must be followed by at least MIN_CHARS_AFTER_PREFIX non-whitespace characters
 *    - Must extend to the end ($) of the token
 *
 * For example, given the chunk: secretKey='aws_123456789012345678'
 * 1. It's split into tokens: ['secretKey', 'aws_123456789012345678']
 * 2. Each token is checked against the regex pattern:
 *    - 'secretKey' doesn't match (doesn't start with a known prefix)
 *    - 'aws_123456789012345678' matches (starts with 'aws_' and has sufficient length)
 *
 */
export declare function findLikelySecrets({ text, omitValuesFromEnhancedScan, }: {
    /**
     * Text to check
     */
    text: string;
    /**
     * Optional array of values to exclude from matching
     */
    omitValuesFromEnhancedScan?: unknown[];
}): {
    index: number;
    prefix: string;
}[];
/**
 * Given the env and base directory, find all file paths to scan. It will look at the
 * env vars to decide if it should omit certain paths.
 *
 * @param options
 * @returns string[] of relative paths from base of files that should be searched
 */
export declare function getFilePathsToScan({ env, base }: {
    env: any;
    base: any;
}): Promise<string[]>;
/**
 * Given the env vars, the current keys, paths, etc. Look across the provided files to find the values
 * of the secrets based on the keys provided. It will process files separately in different read streams.
 * The values that it looks for will be a unique set of plaintext, base64 encoded, and uri encoded permutations
 * of each value - to catch common permutations that occur post build.
 *
 * @param scanArgs {ScanArgs} scan options
 * @returns promise with all of the scan results, if any
 */
export declare function scanFilesForKeyValues({ env, keys, filePaths, base, enhancedScanning, omitValuesFromEnhancedScan, }: ScanArgs): Promise<ScanResults>;
/**
 * ScanResults are all of the finds for all keys and their disparate locations. Scanning is
 * async in streams so order can change a lot. Some matches are the result of an env var explictly being marked as secret,
 * while others are part of the enhanced secret scan.
 *
 * This function groups the results into an object where the results are separate into the secretMatches and enhancedSecretMatches,
 * their value being an object where the keys are the env var keys and the values are all match results for that key.
 *
 * @param scanResults
 * @returns
 */
export declare function groupScanResultsByKeyAndScanType(scanResults: ScanResults): {
    secretMatches: {
        [key: string]: MatchResult[];
    };
    enhancedSecretMatches: {
        [key: string]: MatchResult[];
    };
};
export {};
