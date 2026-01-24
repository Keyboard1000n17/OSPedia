import { InvocationMetadata } from './metadata.js';
interface EnvironmentOptions {
    aiGateway?: string;
    blobs?: string;
    env?: NodeJS.ProcessEnv;
    headers: Headers;
    invocationMetadata?: InvocationMetadata;
    purgeAPIToken?: string;
}
export declare const setupEnvironment: ({ aiGateway, blobs, env, headers, invocationMetadata, purgeAPIToken, }: EnvironmentOptions) => void;
export {};
