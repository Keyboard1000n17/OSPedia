declare const defaultFlags: {
    edge_bundler_generate_tarball: boolean;
    edge_bundler_dry_run_generate_tarball: boolean;
};
type FeatureFlag = keyof typeof defaultFlags;
type FeatureFlags = Partial<Record<FeatureFlag, boolean>>;
declare const getFlags: (input?: Record<string, boolean>, flags?: {
    edge_bundler_generate_tarball: boolean;
    edge_bundler_dry_run_generate_tarball: boolean;
}) => FeatureFlags;
export { defaultFlags, getFlags };
export type { FeatureFlag, FeatureFlags };
