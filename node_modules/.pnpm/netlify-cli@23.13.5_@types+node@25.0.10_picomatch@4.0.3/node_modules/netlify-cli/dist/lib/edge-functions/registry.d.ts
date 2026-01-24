import type { AIGatewayContext } from '@netlify/ai/bootstrap';
import BaseCommand from '../../commands/base-command.js';
import { type NormalizedCachedConfigConfig } from '../../utils/command-helpers.js';
import type { FeatureFlags } from '../../utils/feature-flags.js';
type RunIsolate = Awaited<ReturnType<typeof import('@netlify/edge-bundler').serve>>;
interface EdgeFunctionsRegistryOptions {
    aiGatewayContext?: AIGatewayContext | null;
    bundler: typeof import('@netlify/edge-bundler');
    command: BaseCommand;
    config: NormalizedCachedConfigConfig;
    configPath: string;
    debug: boolean;
    env: Record<string, {
        sources: string[];
        value: string;
    }>;
    featureFlags: FeatureFlags;
    getUpdatedConfig: () => Promise<NormalizedCachedConfigConfig>;
    importMapFromTOML?: string;
    projectDir: string;
    runIsolate: RunIsolate;
    servePath: string;
}
export declare class EdgeFunctionsRegistry {
    importMapFromDeployConfig?: string;
    private aiGatewayContext?;
    private buildError;
    private bundler;
    private configPath;
    private importMapFromTOML?;
    private declarationsFromDeployConfig;
    private declarationsFromTOML;
    private dependencyPaths;
    private directoryWatchers;
    private env;
    private featureFlags;
    private userFunctions;
    private internalFunctions;
    private functionPaths;
    private getUpdatedConfig;
    private initialScan;
    private manifest;
    private routes;
    private runIsolate;
    private servePath;
    private projectDir;
    private command;
    constructor({ aiGatewayContext, bundler, command, config, configPath, env, featureFlags, getUpdatedConfig, importMapFromTOML, projectDir, runIsolate, servePath, }: EdgeFunctionsRegistryOptions);
    private doInitialScan;
    private get functions();
    private build;
    /**
     * Builds a manifest and corresponding routes for the functions in the
     * registry, taking into account the declarations from the TOML, from
     * the deploy configuration API, and from the in-source configuration
     * found in both internal and user functions.
     */
    private buildRoutes;
    private checkForAddedOrDeletedFunctions;
    private static getDeclarationsFromTOML;
    private getDisplayName;
    private static getEnvironmentVariables;
    private handleFileChange;
    initialize(): Promise<void>;
    /**
     * Logs an event associated with functions.
     */
    private logEvent;
    /**
     * Returns the functions in the registry that should run for a given URL path
     * and HTTP method, based on the routes registered for each function.
     */
    matchURLPath(urlPath: string, method: string, headers: Record<string, string | string[] | undefined>): {
        functionNames: string[];
        invocationMetadata: {
            function_config: Record<string, import("@netlify/edge-bundler").EdgeFunctionConfig> | undefined;
            req_routes: number[];
            routes: {
                function: string;
                path: string | undefined;
                pattern: string;
            }[];
        };
    };
    /**
     * Takes the module graph returned from the server and tracks dependencies of
     * each function.
     */
    private processGraph;
    /**
     * Thin wrapper for `#runIsolate` that skips running a build and returns an
     * empty response if there are no functions in the registry.
     */
    private runBuild;
    private get internalImportMapPath();
    private readDeployConfig;
    private scanForDeployConfig;
    private scanForFunctions;
    private setupWatchers;
    private setupWatcherForDirectory;
    private get usesFrameworksAPI();
}
export {};
//# sourceMappingURL=registry.d.ts.map