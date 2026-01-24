import type { Command } from 'commander';
/**
 * A preAction hook that errors out if siteInfo is an empty object
 * Also handles --project flag to resolve site by name
 */
declare const requiresSiteInfoWithProject: (command: Command) => Promise<undefined>;
export default requiresSiteInfoWithProject;
//# sourceMappingURL=requires-site-info-with-project.d.ts.map