import { NetlifyAPI } from '@netlify/api';

interface AIGatewayContext {
    token: string;
    url: string;
}
interface AIGatewayConfig {
    api: NetlifyAPI;
    env: Record<string, {
        sources: string[];
        value: string;
    }>;
    siteID: string | undefined;
    siteURL: string | undefined;
}
interface AIProviderEnvVar {
    key: string;
    url: string;
}
interface AIGatewayTokenResponse {
    token: string;
    url: string;
    envVars?: AIProviderEnvVar[];
}
declare const fetchAIProviders: ({ api }: {
    api: NetlifyAPI;
}) => Promise<AIProviderEnvVar[]>;
declare const fetchAIGatewayToken: ({ api, siteId, }: {
    api: NetlifyAPI;
    siteId: string;
}) => Promise<AIGatewayTokenResponse | null>;
declare const setupAIGateway: (config: AIGatewayConfig) => Promise<void>;
declare const parseAIGatewayContext: (aiGatewayValue?: string) => AIGatewayTokenResponse | undefined;

export { type AIGatewayConfig, type AIGatewayContext, type AIGatewayTokenResponse, type AIProviderEnvVar, fetchAIGatewayToken, fetchAIProviders, parseAIGatewayContext, setupAIGateway };
