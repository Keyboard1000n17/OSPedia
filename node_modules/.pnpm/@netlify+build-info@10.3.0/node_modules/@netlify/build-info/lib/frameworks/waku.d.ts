import { BaseFramework, Category, Framework } from './framework.js';
export declare class Waku extends BaseFramework implements Framework {
    readonly id = "waku";
    name: string;
    npmDependencies: string[];
    configFiles: string[];
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
