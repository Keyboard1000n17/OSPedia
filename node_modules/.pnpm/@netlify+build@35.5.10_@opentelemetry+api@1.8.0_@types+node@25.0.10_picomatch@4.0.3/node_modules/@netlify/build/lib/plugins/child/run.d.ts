export function run({ event, error, constants, envChanges, featureFlags, netlifyConfig, otelCarrier, extensionMetadata }: {
    event: any;
    error: any;
    constants: any;
    envChanges: any;
    featureFlags: any;
    netlifyConfig: any;
    otelCarrier: any;
    extensionMetadata: any;
}, { methods, inputs, packageJson, verbose }: {
    methods: any;
    inputs: any;
    packageJson: any;
    verbose: any;
}): Promise<{
    newEnvChanges: any;
    configMutations: any;
    returnValue: {
        generatedFunctions: any[];
    } | undefined;
}>;
