import { createConnection } from 'net';
import { pathToFileURL } from 'url';
import { Worker } from 'worker_threads';
import lambdaLocal from 'lambda-local';
import { BLOBS_CONTEXT_VARIABLE } from '../../../blobs/blobs.js';
import detectZisiBuilder, { getFunctionMetadata } from './builders/zisi.js';
import { SECONDS_TO_MILLISECONDS } from './constants.js';
export const name = 'js';
lambdaLocal.getLogger().level = 'alert';
export async function getBuildFunction({ config, errorExit, func, projectRoot, }) {
    const metadata = await getFunctionMetadata({ mainFile: func.mainFile, config, projectRoot });
    const zisiBuilder = await detectZisiBuilder({ config, errorExit, func, metadata, projectRoot });
    if (zisiBuilder) {
        return zisiBuilder.build;
    }
    const build = () => Promise.resolve({ schedule: metadata?.schedule, srcFiles: [func.srcPath] });
    return build;
}
const workerURL = new URL('worker.js', import.meta.url);
export const invokeFunction = async ({ context, environment, event, func, timeout, }) => {
    const { buildData } = func;
    // I have no idea why, but it appears that treating the case of a missing `buildData` or missing
    // `buildData.runtimeAPIVersion` as V1 is important.
    const runtimeAPIVersion = buildData != null && 'runtimeAPIVersion' in buildData && typeof buildData.runtimeAPIVersion === 'number'
        ? buildData.runtimeAPIVersion
        : null;
    if (runtimeAPIVersion == null || runtimeAPIVersion !== 2) {
        return await invokeFunctionDirectly({
            context,
            environment: environment,
            event,
            func,
            timeout,
        });
    }
    const workerData = {
        clientContext: JSON.stringify(context),
        environment,
        event,
        // If a function builder has defined a `buildPath` property, we use it.
        // Otherwise, we'll invoke the function's main file.
        // Because we use import() we have to use file:// URLs for Windows.
        entryFilePath: pathToFileURL(buildData != null && 'buildPath' in buildData && buildData.buildPath ? buildData.buildPath : func.mainFile).href,
        timeoutMs: timeout * SECONDS_TO_MILLISECONDS,
    };
    const worker = new Worker(workerURL, {
        env: {
            ...process.env,
            // AWS Lambda disables these Node.js experimental features, even in Node.js versions where they are enabled by
            // default: https://docs.aws.amazon.com/lambda/latest/dg/lambda-nodejs.html#w292aac41c19.
            // They also allow users to re-enable (i.e. not disable) these by co-opting the positive flag (which in reality
            // may or may not exist depending on the exact node.js version). We replicate all this behavior here.
            NODE_OPTIONS: [
                ...(process.env.NODE_OPTIONS?.split(' ') ?? []),
                ...[
                    ...(process.env.NODE_OPTIONS?.includes('--experimental-require-module')
                        ? []
                        : ['--no-experimental-require-module']),
                    ...(process.env.NODE_OPTIONS?.includes('--experimental-detect-module')
                        ? []
                        : ['--no-experimental-detect-module']),
                ]
                    // Unfortunately Node.js throws if `NODE_OPTIONS` contains any unsupported flags and these flags have been
                    // added and removed in various specific versions in each major line. Luckily Node.js has an API just for this!
                    .filter((flag) => process.allowedNodeEnvironmentFlags.has(flag)),
            ].join(' '),
        },
        workerData,
    });
    return await new Promise((resolve, reject) => {
        worker.on('message', (result) => {
            // TODO(serhalp): Improve `WorkerMessage` type. It sure would be nice to keep it simple as it
            // is now, but technically this is an arbitrary type from the user function return...
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            if (result?.streamPort != null) {
                const client = createConnection({
                    port: result.streamPort,
                    host: 'localhost',
                }, () => {
                    result.body = client;
                    resolve(result);
                });
                client.on('error', reject);
            }
            else {
                resolve(result);
            }
        });
        worker.on('error', reject);
    });
};
export const invokeFunctionDirectly = async ({ context, environment, event, func, timeout, }) => {
    const buildData = await func.getBuildData();
    if (buildData == null) {
        throw new Error('Cannot invoke a function that has not been built');
    }
    // If a function builder has defined a `buildPath` property, we use it.
    // Otherwise, we'll invoke the function's main file.
    const lambdaPath = 'buildPath' in buildData && typeof buildData.buildPath === 'string' ? buildData.buildPath : func.mainFile;
    const result = await lambdaLocal.execute({
        clientContext: JSON.stringify(context),
        environment: {
            // Include environment variables from config
            ...environment,
            // We've set the Blobs context on the parent process, which means it will
            // be available to the Lambda. This would be inconsistent with production
            // where only V2 functions get the context injected. To fix it, unset the
            // context variable before invoking the function.
            // This has the side-effect of also removing the variable from `process.env`.
            [BLOBS_CONTEXT_VARIABLE]: undefined,
        },
        event,
        lambdaPath,
        timeoutMs: timeout * SECONDS_TO_MILLISECONDS,
        verboseLevel: 3,
        esm: lambdaPath.endsWith('.mjs'),
    });
    return result;
};
//# sourceMappingURL=index.js.map