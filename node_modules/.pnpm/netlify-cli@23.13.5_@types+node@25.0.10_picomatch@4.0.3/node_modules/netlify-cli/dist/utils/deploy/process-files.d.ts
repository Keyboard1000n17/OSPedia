import { File } from './file.js';
export declare const deployFileNormalizer: (workingDir: string, file: File) => {
    normalizedPath: string;
    basename: string;
    relname: string;
    root: string;
    filepath: string;
    stat: import("fs").Stats;
    type: "file" | "directory";
    hash: string;
    assetType: string;
};
export declare const getDeployConfigPathIfExists: (workingDir: string) => Promise<string | undefined>;
export declare const getEdgeFunctionsDistPathIfExists: (workingDir: string) => Promise<string | undefined>;
export declare const isEdgeFunctionFile: (filePath: string) => boolean;
//# sourceMappingURL=process-files.d.ts.map