import { chalk, warn } from '../../utils/command-helpers.js';
import { MISSING_AWS_SDK_WARNING } from '../log.js';
export const warnIfAwsSdkError = ({ error }) => {
    const isAwsSdkError = typeof error === 'object' &&
        'errorMessage' in error &&
        typeof error.errorMessage === 'string' &&
        error.errorMessage.includes("Cannot find module 'aws-sdk'");
    if (isAwsSdkError) {
        warn(MISSING_AWS_SDK_WARNING);
    }
};
export const formatLambdaError = (err) => chalk.red(`${'errorType' in err ? err.errorType : 'Error'}: ${'errorMessage' in err ? err.errorMessage : err.message}`);
export const styleFunctionName = (name) => chalk.magenta(name);
//# sourceMappingURL=utils.js.map