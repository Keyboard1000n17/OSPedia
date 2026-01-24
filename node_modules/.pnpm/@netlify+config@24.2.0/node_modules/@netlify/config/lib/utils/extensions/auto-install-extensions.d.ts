import { type Extension } from '../../api/site_info.js';
import { type ModeOption } from '../../types/options.js';
interface AutoInstallOptions {
    featureFlags: any;
    siteId: string;
    accountId: string;
    token: string;
    buildDir: string;
    extensions: Extension[];
    offline: boolean;
    testOpts: any;
    mode: ModeOption;
    extensionApiBaseUrl: string;
    debug?: boolean;
}
export declare function handleAutoInstallExtensions({ featureFlags, siteId, accountId, token, buildDir, extensions, offline, testOpts, mode, extensionApiBaseUrl, debug, }: AutoInstallOptions): Promise<Extension[]>;
export {};
