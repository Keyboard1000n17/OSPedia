import { readFile } from 'node:fs/promises';
import { arch, platform } from 'node:process';
export const getBinaryPath = async () => {
    const hostPackage = `@netlify/local-functions-proxy-${platform}-${arch}`;
    try {
        // TODO(serhalp) Use `import('./package.json') with {type: 'json'}` once possible
        // (requires node >=18.20.0 || >=20.10.0).
        const { optionalDependencies } = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf-8'));
        if (!(hostPackage in (optionalDependencies ?? {}))) {
            return null;
        }
        // eslint-disable-next-line import/no-dynamic-require
        const { binaryPath } = await import(hostPackage);
        return binaryPath;
    }
    catch (error) {
        console.error(`Could not load ${hostPackage}:`, error instanceof Error ? error.message : error?.toString());
        return null;
    }
};
//# sourceMappingURL=index.js.map