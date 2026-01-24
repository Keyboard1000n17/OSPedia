interface DeployOptions {
    headers: Headers;
    skewProtectionToken?: string;
}
export declare const getDeployObject: ({ headers, skewProtectionToken }: DeployOptions) => {
    context: string;
    id: string;
    published: boolean;
    skewProtectionToken: string | undefined;
};
export {};
