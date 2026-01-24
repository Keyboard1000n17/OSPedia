import { BaseFramework, Category } from './framework.js';
export class Waku extends BaseFramework {
    id = 'waku';
    name = 'Waku';
    npmDependencies = ['waku'];
    configFiles = ['waku.config.ts', 'waku.config.js'];
    category = Category.SSG;
    dev = {
        command: 'waku dev',
        port: 3000,
    };
    build = {
        command: 'waku build',
        directory: 'dist/public',
    };
    logo = {
        default: '/logos/waku/light.svg',
        light: '/logos/waku/light.svg',
        dark: '/logos/waku/dark.svg',
    };
}
//# sourceMappingURL=waku.js.map