import type { Manifest } from '../node/manifest.js';
export declare const testLogger: import("../node/logger.js").Logger;
export declare const fixturesDir: string;
interface UseFixtureOptions {
    copyDirectory?: boolean;
}
export declare const useFixture: (fixtureName: string, { copyDirectory }?: UseFixtureOptions) => Promise<{
    basePath: string;
    cleanup: () => Promise<[PromiseSettledResult<() => Promise<void>>, PromiseSettledResult<() => Promise<void>>]>;
    distPath: string;
} | {
    basePath: string;
    cleanup: () => Promise<void>;
    distPath: string;
}>;
export declare const getRouteMatcher: (manifest: Manifest) => (candidate: string) => import("../node/manifest.js").Route | undefined;
export declare const runESZIP: (eszipPath: string, vendorDirectory?: string) => Promise<any>;
export declare const runTarball: (tarballPath: string) => Promise<any>;
export declare const denoVersion: string;
export {};
