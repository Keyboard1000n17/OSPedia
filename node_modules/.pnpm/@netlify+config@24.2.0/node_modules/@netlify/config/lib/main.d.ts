import { type MinimalAccount } from './api/site_info.js';
import { type ExtensionWithDev } from './extensions.js';
export type Config = {
    accounts: MinimalAccount[] | undefined;
    api: any;
    branch: any;
    buildDir: any;
    config: any;
    configPath: any;
    context: any;
    env: any;
    headersPath: any;
    integrations: ExtensionWithDev[];
    logs: any;
    redirectsPath: any;
    repositoryRoot: any;
    siteInfo: any;
    token: any;
};
/**
 * Load the configuration file.
 * Takes an optional configuration file path as input and return the resolved
 * `config` together with related properties such as the `configPath`.
 */
export declare const resolveConfig: (opts: any) => Promise<Config>;
