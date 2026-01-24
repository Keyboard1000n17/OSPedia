import { type WriteStream } from 'fs';
import { type ExecaChildProcess } from 'execa';
import { FeatureFlags } from './feature_flags.js';
import { Logger } from './logger.js';
export declare const LEGACY_DENO_VERSION_RANGE = "1.39.0 - 2.2.4";
export declare const DENO_VERSION_RANGE = "^2.4.2";
export type OnBeforeDownloadHook = () => void | Promise<void>;
export type OnAfterDownloadHook = (error?: Error) => void | Promise<void>;
export interface DenoOptions {
    cacheDirectory?: string;
    debug?: boolean;
    denoDir?: string;
    featureFlags?: FeatureFlags;
    logger?: Logger;
    onAfterDownload?: OnAfterDownloadHook;
    onBeforeDownload?: OnBeforeDownloadHook;
    useGlobal?: boolean;
    versionRange?: string;
}
export interface ProcessRef {
    ps?: ExecaChildProcess<string>;
}
interface RunOptions {
    cwd?: string;
    env?: NodeJS.ProcessEnv;
    extendEnv?: boolean;
    pipeOutput?: boolean;
    stderr?: WriteStream;
    stdout?: WriteStream;
    rejectOnExitCode?: boolean;
}
export declare class DenoBridge {
    cacheDirectory: string;
    currentDownload?: ReturnType<DenoBridge['downloadBinary']>;
    debug: boolean;
    denoDir?: string;
    logger: Logger;
    onAfterDownload?: OnAfterDownloadHook;
    onBeforeDownload?: OnBeforeDownloadHook;
    useGlobal: boolean;
    versionRange: string;
    constructor(options: DenoOptions);
    private downloadBinary;
    getBinaryVersion(binaryPath: string): Promise<{
        version: string;
        error?: undefined;
    } | {
        version?: undefined;
        error: Error;
    }>;
    private getCachedBinary;
    private getGlobalBinary;
    private getRemoteBinary;
    private static runWithBinary;
    private writeVersionFile;
    ensureCacheDirectory(): Promise<void>;
    getBinaryPath(options?: {
        silent?: boolean;
    }): Promise<{
        global: boolean;
        path: string;
    }>;
    getEnvironmentVariables(inputEnv?: NodeJS.ProcessEnv): NodeJS.ProcessEnv;
    run(args: string[], { cwd, env: inputEnv, extendEnv, rejectOnExitCode, stderr, stdout }?: RunOptions): Promise<import("execa").ExecaReturnValue<string>>;
    runInBackground(args: string[], ref?: ProcessRef, { env: inputEnv, extendEnv, pipeOutput, stderr, stdout }?: RunOptions): Promise<void>;
}
export {};
