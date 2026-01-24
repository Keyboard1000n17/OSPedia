import { BaseFramework, Category, Framework } from './framework.js';
export declare class Hono extends BaseFramework implements Framework {
    readonly id = "hono";
    name: string;
    npmDependencies: string[];
    category: Category;
    logo: {
        default: string;
        light: string;
        dark: string;
    };
}
