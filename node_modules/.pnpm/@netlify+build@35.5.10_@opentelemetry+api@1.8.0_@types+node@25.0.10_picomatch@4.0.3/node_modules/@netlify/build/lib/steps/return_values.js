export const getGeneratedFunctions = (returnValues) => {
    return Object.entries(returnValues ?? {}).flatMap(([name, returnValue]) => {
        const generator = {
            displayName: returnValue.displayName ?? name,
            name,
            type: returnValue.generatorType,
        };
        return (returnValue.generatedFunctions?.map((func) => ({
            generator,
            path: func.path,
        })) ?? []);
    });
};
