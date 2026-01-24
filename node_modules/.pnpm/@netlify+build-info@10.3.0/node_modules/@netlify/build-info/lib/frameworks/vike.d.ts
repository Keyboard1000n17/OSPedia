import { BaseFramework, Category, Framework } from './framework.js';
export declare class Vike extends BaseFramework implements Framework {
    readonly id = "vike";
    name: string;
    npmDependencies: string[];
    category: Category;
    dev: {
        command: string;
        port: number;
    };
    build: {
        command: string;
        directory: string;
    };
    logo: {
        default: string;
        light: string;
        dark: string;
    };
}
