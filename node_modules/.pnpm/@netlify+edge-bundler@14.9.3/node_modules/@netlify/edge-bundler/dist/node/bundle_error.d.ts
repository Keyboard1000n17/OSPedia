interface BundleErrorOptions {
    cause?: unknown;
    format?: string;
}
declare const getCustomErrorInfo: (options?: BundleErrorOptions) => {
    location: {
        format: string | undefined;
        runtime: string;
    };
    type: string;
};
export declare class BundleError extends Error {
    customErrorInfo: ReturnType<typeof getCustomErrorInfo>;
    constructor(originalError: Error, options?: BundleErrorOptions);
}
/**
 * BundleErrors are treated as user-error, so Netlify Team is not alerted about them.
 */
export declare const wrapBundleError: (input: unknown, options?: BundleErrorOptions) => unknown;
export {};
