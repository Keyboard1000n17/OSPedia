export function getNewEnvChanges(envBefore: any, netlifyConfig: any, netlifyConfigCopy: any): any;
export function setEnvChanges(envChanges: any, currentEnv?: NodeJS.ProcessEnv): {
    [key: string]: string | undefined;
    TZ?: string;
};
