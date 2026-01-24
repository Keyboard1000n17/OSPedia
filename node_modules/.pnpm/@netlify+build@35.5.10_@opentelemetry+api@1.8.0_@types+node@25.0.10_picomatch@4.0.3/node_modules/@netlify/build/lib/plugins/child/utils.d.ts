export function getUtils({ event, constants: { FUNCTIONS_SRC, INTERNAL_FUNCTIONS_SRC, CACHE_DIR }, generatedFunctions, runState, }: {
    event: any;
    constants: {
        FUNCTIONS_SRC: any;
        INTERNAL_FUNCTIONS_SRC: any;
        CACHE_DIR: any;
    };
    generatedFunctions?: never[] | undefined;
    runState: any;
}): {
    build: {
        failPlugin: (message: any, opts: any) => never;
        failBuild: any;
        cancelBuild: any;
    };
    cache: {
        save: (paths: any, optsA: any) => Promise<any>;
        restore: (paths: any, optsA: any) => Promise<any>;
        remove: (paths: any, optsA: any) => Promise<any>;
        has: (paths: any, optsA: any) => Promise<any>;
        list: (optsA: any) => Promise<string[]>;
        getCacheDir: (optsA: any) => string;
    };
    run: (file: string, args?: string[] | object, options?: import("execa").Options) => import("execa").ExecaChildProcess<string>;
    functions: {
        add: (src: any) => Promise<void>;
        list: any;
        listAll: any;
        generate: (functionPath: any) => any;
    };
    status: {
        show: any;
    };
};
