export function getHeadersPath({ build: { publish } }: {
    build: {
        publish: any;
    };
}): string;
export function addHeaders({ config: { headers: configHeaders, ...config }, headersPath, logs }: {
    config: {
        [x: string]: any;
        headers: any;
    };
    headersPath: any;
    logs: any;
}): Promise<{
    headers: (import("@netlify/headers-parser").MinimalHeader | import("@netlify/headers-parser").Header)[];
}>;
