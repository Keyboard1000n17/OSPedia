type GeneratorType = 'build plugin' | 'extension';
export interface GeneratedFunction {
    generator: {
        displayName: string;
        name: string;
        type: GeneratorType;
    };
    path: string;
}
export interface ReturnValue {
    displayName?: string;
    generatedFunctions?: {
        path: string;
    }[];
    generatorType: GeneratorType;
}
export declare const getGeneratedFunctions: (returnValues?: Record<string, ReturnValue>) => GeneratedFunction[];
export {};
