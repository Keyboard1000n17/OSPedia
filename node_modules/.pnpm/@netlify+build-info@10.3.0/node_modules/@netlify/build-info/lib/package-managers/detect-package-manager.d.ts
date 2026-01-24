import { SemVer } from 'semver';
import type { Project } from '../project.js';
export type DetectPackageManagerOptions = {
    /** Enable sniffing the `npm_config_user_agent` environment variable to detect the package manager */
    enableUserAgentSniffing?: boolean;
};
export declare const enum PkgManager {
    YARN = "yarn",
    PNPM = "pnpm",
    BUN = "bun",
    NPM = "npm"
}
export type PkgManagerFields = {
    /** The package managers name that is used for logging */
    name: PkgManager;
    /** The package managers install command */
    installCommand: string;
    /** The package managers run command prefix */
    runCommand: string;
    /** The package managers command prefix for running a command in a locally installed package */
    localPackageCommand: string;
    /** The package managers command prefix(s) for running a command in a non-installed package. This is sometimes the same as `localPackageCommand` */
    remotePackageCommand: string[];
    /** The lock files a package manager is using */
    lockFiles: string[];
    /** Environment variable that can be used to force the usage of a package manager even though there is no lock file or a different lock file */
    forceEnvironment?: string;
    /** Flags that should be used for running the installation command */
    installFlags?: string[];
    /** A list of all cache locations for the package manager */
    cacheLocations?: string[];
    version?: SemVer;
};
/** The definition of all available package managers */
export declare const AVAILABLE_PACKAGE_MANAGERS: Record<PkgManager, PkgManagerFields>;
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
export declare function sniffUserAgent(project: Project): PkgManager | undefined;
/**
 * Detects the used package manager based on
 * 1. packageManager field
 * 2. environment variable that forces the usage
 * 3. a lock file that is present in this directory or up in the tree for workspaces
 */
export declare const detectPackageManager: (project: Project, options?: DetectPackageManagerOptions) => Promise<PkgManagerFields | null>;
