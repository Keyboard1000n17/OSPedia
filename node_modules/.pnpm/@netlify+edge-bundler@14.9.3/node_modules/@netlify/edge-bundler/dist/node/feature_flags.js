const defaultFlags = {
    edge_bundler_generate_tarball: false,
    edge_bundler_dry_run_generate_tarball: false,
};
const getFlags = (input = {}, flags = defaultFlags) => Object.entries(flags).reduce((result, [key, defaultValue]) => ({
    ...result,
    [key]: input[key] === undefined ? defaultValue : input[key],
}), {});
export { defaultFlags, getFlags };
