import { NetlifyAPI } from '@netlify/api';
import * as z from 'zod';
import { ModeOption, TestOptions } from '../types/options.js';
type GetSiteInfoOptions = {
    siteId: string;
    accountId?: string;
    mode: ModeOption;
    offline?: boolean;
    api?: NetlifyAPI;
    context?: string;
    featureFlags?: Record<string, boolean>;
    testOpts?: TestOptions;
    siteFeatureFlagPrefix: string;
    token: string;
    extensionApiBaseUrl: string;
};
export type Extension = {
    author: string | undefined;
    extension_token: string | undefined;
    has_build: boolean;
    name: string;
    slug: string;
    version: string;
};
export type SiteInfo = {
    accounts: MinimalAccount[];
    extensions: Extension[];
    siteInfo: Awaited<ReturnType<NetlifyAPI['getSite']>> & {
        feature_flags?: Record<string, string | number | boolean>;
        use_envelope?: boolean;
    };
};
/**
 * Retrieve Netlify Site information, if available.
 * Used to retrieve local build environment variables and UI build settings.
 * This is not used in production builds since the buildbot passes this
 * information instead.
 * Requires knowing the `siteId` and having the access `token`.
 * Silently ignore API errors. For example the network connection might be down,
 * but local builds should still work regardless.
 */
export declare const getSiteInfo: ({ api, siteId, accountId, mode, context, offline, testOpts, siteFeatureFlagPrefix, token, featureFlags, extensionApiBaseUrl, }: GetSiteInfoOptions) => Promise<SiteInfo>;
export type MinimalAccount = {
    id: string;
    name: string;
    slug: string;
    default: boolean;
    team_logo_url: string | null;
    on_pro_trial: boolean;
    organization_id: string | null;
    type_name: string;
    type_slug: string;
    members_count: number;
};
declare const ExtensionResponseSchema: z.ZodArray<z.ZodObject<{
    author: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    extension_token: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    has_build: z.ZodBoolean;
    name: z.ZodString;
    slug: z.ZodString;
    version: z.ZodString;
}, z.core.$strip>>;
export type ExtensionResponse = z.output<typeof ExtensionResponseSchema>;
type GetExtensionsOptions = {
    siteId?: string;
    accountId?: string;
    testOpts: TestOptions;
    offline: boolean;
    token?: string;
    featureFlags?: Record<string, boolean>;
    extensionApiBaseUrl: string;
    mode: ModeOption;
};
export declare const getExtensions: ({ siteId, accountId, testOpts, offline, token, featureFlags, extensionApiBaseUrl, mode, }: GetExtensionsOptions) => Promise<Extension[]>;
export {};
