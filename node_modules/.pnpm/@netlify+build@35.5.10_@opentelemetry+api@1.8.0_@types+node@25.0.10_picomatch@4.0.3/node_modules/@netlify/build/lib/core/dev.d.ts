export function startDev(devCommand: any, flags?: {}): Promise<{
    success: boolean;
    severityCode: number;
    netlifyConfig: any;
    logs: import("../log/logger.js").Logs | undefined;
    configMutations: any;
    generatedFunctions: import("../steps/return_values.js").GeneratedFunction[];
    error?: undefined;
} | {
    success: boolean;
    severityCode: number;
    logs: import("../log/logger.js").Logs | undefined;
    error: {
        message: string;
        stack: string;
    };
    netlifyConfig?: undefined;
    configMutations?: undefined;
    generatedFunctions?: undefined;
}>;
