import { BaseFramework, Category } from './framework.js';
export class Vike extends BaseFramework {
    id = 'vike';
    name = 'Vike';
    npmDependencies = ['vike'];
    category = Category.SSG;
    dev = {
        command: 'vike dev',
        port: 3000,
    };
    build = {
        command: 'vike build',
        directory: 'dist/client',
    };
    logo = {
        default: '/logos/vike/light.svg',
        light: '/logos/vite/light.svg',
        dark: '/logos/vite/dark.svg',
    };
}
//# sourceMappingURL=vike.js.map