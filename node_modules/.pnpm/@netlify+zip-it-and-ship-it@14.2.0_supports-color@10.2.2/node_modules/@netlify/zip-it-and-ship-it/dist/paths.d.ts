export interface FunctionsBag {
    generated: FunctionsCategory;
    user: FunctionsCategory;
}
export interface FunctionsCategory {
    /**
     * List of paths for directories containing one or more functions. Entries in
     * these directories are considered functions when they are files that match
     * one of the supported extensions or when they are sub-directories that
     * contain a function following the sub-directory naming patterns.
     * Paths can be relative.
     */
    directories: string[];
    /**
     * List of paths for specific functions. Paths can be files that match one
     * of the supported extensions or sub-directories that contain a function
     * following the sub-directory naming patterns. Paths can be relative.
     */
    functions: string[];
}
export type MixedPaths = string | string[] | {
    /**
     * Functions generated on behalf of the user by a build plugin, extension
     * or a framework.
     */
    generated?: Partial<FunctionsCategory>;
    /**
     * Functions authored by the user.
     */
    user?: Partial<FunctionsCategory>;
};
/**
 * Normalizes the `zipFunctions` input into a `FunctionsBag` object.
 */
export declare const getFunctionsBag: (input: MixedPaths) => FunctionsBag;
