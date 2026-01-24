export type ArrayRepeatSyntax = 'bracket' | 'repeat';
export type NestingSyntax = 'dot' | 'index' | 'js';
export type DeserializeValueFunction = (value: string, key: PropertyKey) => unknown;
export type SerializeValueFunction = (value: unknown, key: PropertyKey) => string;
export type ShouldSerializeObjectFunction = (value: unknown) => boolean;
export type DeserializeKeyFunction = (key: string) => PropertyKey;
export declare const defaultValueSerializer: SerializeValueFunction;
export declare const defaultShouldSerializeObject: ShouldSerializeObjectFunction;
export interface Options {
    nesting: boolean;
    nestingSyntax: NestingSyntax;
    arrayRepeat: boolean;
    arrayRepeatSyntax: ArrayRepeatSyntax;
    delimiter: string | number;
    valueDeserializer: DeserializeValueFunction;
    keyDeserializer: DeserializeKeyFunction;
    valueSerializer: SerializeValueFunction;
    shouldSerializeObject: ShouldSerializeObjectFunction;
}
export declare const defaultOptions: Options;
