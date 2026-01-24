import { type Extension } from './api/site_info.js';
export declare const NETLIFY_API_STAGING_HOSTNAME = "api-staging.netlify.com";
export declare const NETLIFY_API_HOSTNAME = "api.netlify.com";
export declare const EXTENSION_API_BASE_URL = "https://api.netlifysdk.com";
export declare const EXTENSION_API_STAGING_BASE_URL = "https://api-staging.netlifysdk.com";
export type MergeExtensionsOptions = {
    /**
     * Extensions loaded via the Netlify API. These are extensions enabled
     */
    apiExtensions: Extension[];
    /**
     * Development extensions loaded via the build target's netlify.toml file. Only used when the
     * build context is set to `dev` (e.g. when `netlify build` is run with `--context=dev`).
     */
    configExtensions?: {
        name: string;
        dev?: {
            path: string;
            force_run_in_build?: boolean;
        };
    }[];
    /**
     * A path to the build target's build directory. We use this in dev mode to resolve non-absolute
     * build plugin paths.
     */
    buildDir: string;
    /**
     * The current build context, set e.g. via `netlify build --context=<context>`.
     */
    context: string;
};
export type ExtensionWithDev = Extension & {
    buildPlugin: {
        origin: 'local' | 'remote';
        packageURL: URL;
    } | null;
    dev?: {
        path: string;
        force_run_in_build?: boolean;
    } | null;
};
/**
 * normalizeAndMergeExtensions accepts several lists of extensions configured for the current build
 * target, normalizes them to compensate for some differences between the various APIs we load this
 * data from (one of two API endpoints and the user's config file), and merges them into a single
 * list.
 *
 * Note that it merges extension data provided by the config file (configExtensions) only when
 * context=dev. When it does so, config file data will be merged into any available API data, giving
 * a preference to config file data.
 */
export declare const normalizeAndMergeExtensions: ({ apiExtensions, buildDir, configExtensions, context, }: MergeExtensionsOptions) => ExtensionWithDev[];
