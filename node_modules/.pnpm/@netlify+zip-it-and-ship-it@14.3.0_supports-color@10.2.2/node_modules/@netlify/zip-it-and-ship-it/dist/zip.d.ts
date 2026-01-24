import { ArchiveFormat } from './archive.js';
import { Config } from './config.js';
import { FeatureFlags } from './feature_flags.js';
import { type MixedPaths } from './paths.js';
import { FunctionResult } from './utils/format_result.js';
import { LogFunction } from './utils/logger.js';
export interface ZipFunctionOptions {
    archiveFormat?: ArchiveFormat;
    basePath?: string;
    branch?: string;
    config?: Config;
    featureFlags?: FeatureFlags;
    repositoryRoot?: string;
    zipGo?: boolean;
    systemLog?: LogFunction;
    debug?: boolean;
    internalSrcFolder?: string;
}
export type ZipFunctionsOptions = ZipFunctionOptions & {
    configFileDirectories?: string[];
    manifest?: string;
    parallelLimit?: number;
};
export declare const zipFunctions: (input: MixedPaths, destFolder: string, { archiveFormat, basePath, branch, config, configFileDirectories, featureFlags: inputFeatureFlags, manifest, parallelLimit, repositoryRoot, systemLog, debug, }?: ZipFunctionsOptions) => Promise<FunctionResult[]>;
export declare const zipFunction: (relativeSrcPath: string, destFolder: string, { archiveFormat, basePath, config: inputConfig, featureFlags: inputFeatureFlags, repositoryRoot, systemLog, debug, internalSrcFolder, }?: ZipFunctionOptions) => Promise<FunctionResult | undefined>;
