import { LambdaEvent } from './event.js';
export declare const fromEventHeaders: (eventHeaders: LambdaEvent["headers"]) => Headers;
export declare const toMultiValueHeaders: (headers: Headers) => Record<string, string[]>;
