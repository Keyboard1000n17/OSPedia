import type { NetlifyAPI } from '@netlify/api';
export declare const getEnvelope: ({ api, accountId, siteId, context, }: {
    api: NetlifyAPI;
    accountId: string;
    siteId?: string;
    context?: string;
}) => Promise<any>;
