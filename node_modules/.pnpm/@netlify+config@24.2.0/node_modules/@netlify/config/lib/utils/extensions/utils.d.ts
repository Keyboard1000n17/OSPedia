import { ModeOption } from '../../types/options.js';
export type InstallExtensionResult = {
    slug: string;
    error: null;
} | {
    slug: string;
    error: {
        code: string;
        message: string;
    };
};
export declare const installExtension: ({ netlifyToken, accountId, slug, hostSiteUrl, extensionInstallationSource, }: {
    netlifyToken: string;
    accountId: string;
    slug: string;
    hostSiteUrl: string;
    extensionInstallationSource: ModeOption;
}) => Promise<InstallExtensionResult>;
type AutoInstallableExtensionMeta = {
    slug: string;
    hostSiteUrl: string;
    packages: string[];
};
/**
 * Fetches the list of extensions from Jigsaw that declare associated packages.
 * Used to determine which extensions should be auto-installed based on the packages
 * present in the package.json (e.g., if an extension lists '@netlify/neon',
 * and that package exists in package.json, the extension will be auto-installed).
 *
 * @returns Array of extensions with their associated packages
 */
export declare function fetchAutoInstallableExtensionsMeta(): Promise<AutoInstallableExtensionMeta[]>;
export {};
