import { RequestContextFactory } from '@netlify/cache/bootstrap';
export type CacheAPIContext = ReturnType<RequestContextFactory>;
export declare const getContextFromRequest: (baseURL: string, cacheToken?: string, cacheURL?: string) => {
    host: string;
    token: string;
    url: string;
} | null;
