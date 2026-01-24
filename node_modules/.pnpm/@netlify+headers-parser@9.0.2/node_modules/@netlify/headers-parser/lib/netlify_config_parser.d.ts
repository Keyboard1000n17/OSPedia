import type { MinimalHeader } from './types.js';
export declare const parseConfigHeaders: (netlifyConfigPath: string) => Promise<{
    headers: MinimalHeader[];
    errors: Error[];
}>;
