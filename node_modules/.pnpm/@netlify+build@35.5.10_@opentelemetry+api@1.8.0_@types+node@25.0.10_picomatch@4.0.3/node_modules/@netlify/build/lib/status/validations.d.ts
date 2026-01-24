import { DynamicMethods } from 'packages/js-client/lib/types.js';
import { SecretScanResult } from '../plugins_core/secrets_scanning/utils.js';
import { SystemLogger } from '../plugins_core/types.js';
export declare const reportValidations: ({ api, secretScanResult, deployId, systemLog, }: {
    api: DynamicMethods;
    secretScanResult: SecretScanResult;
    deployId: string;
    systemLog: SystemLogger;
}) => Promise<void>;
