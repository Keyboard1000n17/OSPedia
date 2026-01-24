import { parse } from 'semver';
/** The definition of all available package managers */
export const AVAILABLE_PACKAGE_MANAGERS = {
    ["yarn" /* PkgManager.YARN */]: {
        name: "yarn" /* PkgManager.YARN */,
        installCommand: 'yarn install',
        runCommand: 'yarn run',
        localPackageCommand: 'yarn',
        remotePackageCommand: ['yarn', 'dlx'],
        lockFiles: ['yarn.lock'],
        forceEnvironment: 'NETLIFY_USE_YARN',
    },
    ["pnpm" /* PkgManager.PNPM */]: {
        name: "pnpm" /* PkgManager.PNPM */,
        installCommand: 'pnpm install',
        runCommand: 'pnpm run',
        localPackageCommand: 'pnpm',
        remotePackageCommand: ['pnpm', 'dlx'],
        lockFiles: ['pnpm-lock.yaml'],
        forceEnvironment: 'NETLIFY_USE_PNPM',
    },
    ["npm" /* PkgManager.NPM */]: {
        name: "npm" /* PkgManager.NPM */,
        installCommand: 'npm install',
        runCommand: 'npm run',
        localPackageCommand: 'npx',
        remotePackageCommand: ['npx'],
        lockFiles: ['package-lock.json'],
    },
    ["bun" /* PkgManager.BUN */]: {
        name: "bun" /* PkgManager.BUN */,
        installCommand: 'bun install',
        runCommand: 'bun run',
        localPackageCommand: 'bunx',
        remotePackageCommand: ['bunx'],
        lockFiles: ['bun.lockb', 'bun.lock'],
    },
};
/**
 * The environment variable `npm_config_user_agent` can be used to
 * guess the package manager that was used to execute a script.
 * It's imperfect (just like regular user agent sniffing!)
 * but the package managers we support all set this property:
 *
 * - [npm](https://github.com/npm/cli/blob/1415b4bdeeaabb6e0ba12b6b1b0cc56502bd64ab/lib/utils/config/definitions.js#L1945-L1979)
 * - [pnpm](https://github.com/pnpm/pnpm/blob/cd4f9341e966eb8b411462b48ff0c0612e0a51a7/packages/plugin-commands-script-runners/src/makeEnv.ts#L14)
 * - [yarn](https://yarnpkg.com/advanced/lifecycle-scripts#environment-variables)
 * - [bun](https://github.com/oven-sh/bun/blob/550522e99b303d8172b7b16c5750d458cb056434/src/Global.zig#L205)
 */
export function sniffUserAgent(project) {
    const userAgent = project.getEnv('npm_config_user_agent');
    if (userAgent === undefined) {
        return undefined;
    }
    if (userAgent.includes('yarn')) {
        return "yarn" /* PkgManager.YARN */;
    }
    if (userAgent.includes('pnpm')) {
        return "pnpm" /* PkgManager.PNPM */;
    }
    if (userAgent.includes('bun')) {
        return "bun" /* PkgManager.BUN */;
    }
    // npm should come last as it is included in the user agent strings of other package managers
    if (userAgent.includes('npm')) {
        return "npm" /* PkgManager.NPM */;
    }
}
/**
 * generate a map out of key is lock file and value the package manager
 * this is to reduce the complexity in loops
 */
const lockFileMap = Object.values(AVAILABLE_PACKAGE_MANAGERS).reduce((cur, pkgManager) => pkgManager.lockFiles.reduce((cur, lockFile) => ({ ...cur, [lockFile]: pkgManager }), cur), {});
/**
 * Detects the used package manager based on
 * 1. packageManager field
 * 2. environment variable that forces the usage
 * 3. a lock file that is present in this directory or up in the tree for workspaces
 */
export const detectPackageManager = async (project, options) => {
    const sniffedPkgManager = options?.enableUserAgentSniffing ? sniffUserAgent(project) : undefined;
    try {
        const pkgPaths = await project.fs.findUpMultiple('package.json', {
            cwd: project.baseDirectory,
            stopAt: project.root,
        });
        // if there is no package json than there is no package manager to detect
        if (!pkgPaths.length) {
            return sniffedPkgManager ? AVAILABLE_PACKAGE_MANAGERS[sniffedPkgManager] : null;
        }
        for (const pkgPath of pkgPaths) {
            const { packageManager } = await project.fs.readJSON(pkgPath);
            if (packageManager) {
                const [parsed, version] = packageManager.split('@');
                if (AVAILABLE_PACKAGE_MANAGERS[parsed]) {
                    const pkgManager = AVAILABLE_PACKAGE_MANAGERS[parsed];
                    pkgManager.version = parse(version) || undefined;
                    return pkgManager;
                }
            }
        }
        // the package manager can be enforced via an environment variable as well
        for (const pkgManager of Object.values(AVAILABLE_PACKAGE_MANAGERS)) {
            if (pkgManager.forceEnvironment && project.getEnv(pkgManager.forceEnvironment) === 'true') {
                return pkgManager;
            }
        }
        // find the correct lock file the tree up
        const lockFilePath = await project.fs.findUp(Object.keys(lockFileMap), {
            cwd: project.baseDirectory,
            stopAt: project.root,
        });
        // if we found a lock file and the usage is not prohibited through an environment variable
        // return the found package manager
        if (lockFilePath) {
            const lockFile = project.fs.basename(lockFilePath);
            const pkgManager = lockFileMap[lockFile];
            // check if it is not got disabled
            if (!(pkgManager.forceEnvironment && project.getEnv(pkgManager.forceEnvironment) === 'false')) {
                return pkgManager;
            }
        }
    }
    catch (error) {
        project.report(error);
    }
    if (sniffedPkgManager) {
        return AVAILABLE_PACKAGE_MANAGERS[sniffedPkgManager];
    }
    // TODO: add some reporting here to log that we fall backe to NPM
    return AVAILABLE_PACKAGE_MANAGERS["npm" /* PkgManager.NPM */];
};
//# sourceMappingURL=detect-package-manager.js.map