import { Context, NetlifyGlobal } from '@netlify/types';
export { Context, Cookie } from '@netlify/types';

type Cache = 'off' | 'manual';
type Path = `/${string}`;
type OnError = 'fail' | 'bypass' | Path;
type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS';
type HeadersConfig = Record<string, boolean | string>;
type RateLimitAggregator = 'domain' | 'ip';
type RateLimitAction = 'rate_limit' | 'rewrite';
/**
 * Netlify Custom Rate Limits inline configuration options.
 */
interface RateLimitConfig {
    action?: RateLimitAction;
    aggregateBy?: RateLimitAggregator | RateLimitAggregator[];
    to?: string;
    windowSize: number;
    windowLimit: number;
}
/**
 * Netlify Edge Function inline configuration options.
 *
 * @see {@link https://docs.netlify.com/edge-functions/declarations/#declare-edge-functions-inline}
 */
interface Config {
    cache?: Cache;
    excludedPath?: Path | Path[];
    excludedPattern?: string | string[];
    header?: HeadersConfig;
    onError?: OnError;
    path?: Path | Path[];
    pattern?: string | string[];
    method?: HTTPMethod | HTTPMethod[];
    rateLimit?: RateLimitConfig;
}
/**
 * Framework-generated Netlify Edge Function inline configuration options.
 *
 * @see {@link https://docs.netlify.com/edge-functions/create-integration/#generate-declarations}
 */
interface IntegrationsConfig extends Config {
    name?: string;
    generator?: string;
}
/**
 * A function configuration in the `manifest.json` file for framework-generated Netlify
 * Edge Functions.
 *
 * @see {@link https://docs.netlify.com/edge-functions/declarations/#declare-edge-functions-inline}
 */
interface ManifestFunction extends IntegrationsConfig {
    function: string;
}
/**
 * The `manifest.json` file for framework-generated Netlify Edge Functions.
 *
 * @see {@link https://docs.netlify.com/edge-functions/create-integration/#generate-declarations}
 */
interface Manifest {
    version: 1;
    functions: ManifestFunction[];
    import_map?: string;
}

type EdgeFunction = (request: Request, context: Context) => Response | Promise<Response> | URL | Promise<URL> | undefined | Promise<void>;

declare global {
    var Netlify: NetlifyGlobal;
}

export type { Config, EdgeFunction, IntegrationsConfig, Manifest, ManifestFunction };
