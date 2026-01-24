import { DenoBridge } from '../bridge.js';
import { Bundle } from '../bundle.js';
import { EdgeFunction } from '../edge_function.js';
import { FeatureFlags } from '../feature_flags.js';
import { ImportMap } from '../import_map.js';
interface BundleTarballOptions {
    basePath: string;
    buildID: string;
    debug?: boolean;
    deno: DenoBridge;
    distDirectory: string;
    featureFlags: FeatureFlags;
    functions: EdgeFunction[];
    importMap: ImportMap;
    vendorDirectory?: string;
}
export declare const bundle: ({ basePath, buildID, deno, distDirectory, functions, importMap, vendorDirectory, }: BundleTarballOptions) => Promise<Bundle>;
export {};
