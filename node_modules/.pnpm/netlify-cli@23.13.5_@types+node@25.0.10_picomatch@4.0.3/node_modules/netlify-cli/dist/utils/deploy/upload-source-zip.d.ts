import type { DeployEvent } from './status-cb.js';
interface UploadSourceZipOptions {
    sourceDir: string;
    uploadUrl: string;
    filename: string;
    statusCb?: (status: DeployEvent) => void;
}
export declare const uploadSourceZip: ({ sourceDir, uploadUrl, filename, statusCb, }: UploadSourceZipOptions) => Promise<{
    sourceZipFileName: string;
}>;
export {};
//# sourceMappingURL=upload-source-zip.d.ts.map