/**
 * Normalizes the `zipFunctions` input into a `FunctionsBag` object.
 */
export const getFunctionsBag = (input) => {
    if (typeof input === 'string') {
        return {
            generated: {
                directories: [],
                functions: [],
            },
            user: {
                directories: [input],
                functions: [],
            },
        };
    }
    if (Array.isArray(input)) {
        return {
            generated: {
                directories: [],
                functions: [],
            },
            user: {
                directories: input,
                functions: [],
            },
        };
    }
    return {
        generated: {
            directories: input.generated?.directories ?? [],
            functions: input.generated?.functions ?? [],
        },
        user: {
            directories: input.user?.directories ?? [],
            functions: input.user?.functions ?? [],
        },
    };
};
