import { setTimeout } from 'timers/promises';
import { logsAreBuffered } from './logger.js';
// We try to use `stdio: inherit` because it keeps `stdout/stderr` as `TTY`,
// which solves many problems. However we can only do it in build.command.
// Plugins have several events, so need to be switch on and off instead.
// In buffer mode, `pipe` is necessary.
export const getBuildCommandStdio = function (logs) {
    if (logsAreBuffered(logs)) {
        return 'pipe';
    }
    return 'inherit';
};
// Add build command output
export const handleBuildCommandOutput = function ({ stdout: commandStdout, stderr: commandStderr }, logs) {
    if (!logsAreBuffered(logs)) {
        return;
    }
    pushBuildCommandOutput(commandStdout, logs.stdout);
    pushBuildCommandOutput(commandStderr, logs.stderr);
};
const pushBuildCommandOutput = function (output, logsArray) {
    if (output === '') {
        return;
    }
    logsArray.push(output);
};
const pipedPluginProcesses = new WeakMap();
// Start plugin step output
export const pipePluginOutput = function (childProcess, logs, standardStreams) {
    if (pipedPluginProcesses.has(childProcess)) {
        return pipedPluginProcesses.get(childProcess);
    }
    const listeners = !logsAreBuffered(logs)
        ? streamOutput(childProcess, standardStreams)
        : pushOutputToLogs(childProcess, logs, standardStreams.outputFlusher);
    pipedPluginProcesses.set(childProcess, listeners);
    return listeners;
};
// Stop streaming/buffering plugin step output
export const unpipePluginOutput = async function (childProcess, logs, listeners, standardStreams) {
    // Let `childProcess` `stdout` and `stderr` flush before stopping redirecting
    await setTimeout(0);
    if (logsAreBuffered(logs)) {
        unpushOutputToLogs(childProcess, listeners.stdoutListener, listeners.stderrListener);
    }
    else {
        unstreamOutput(childProcess, standardStreams);
    }
    pipedPluginProcesses.delete(childProcess);
};
// Usually, we stream stdout/stderr because it is more efficient
const streamOutput = function (childProcess, standardStreams) {
    childProcess.stdout?.pipe(standardStreams.stdout);
    childProcess.stderr?.pipe(standardStreams.stderr);
};
const unstreamOutput = function (childProcess, standardStreams) {
    childProcess.stdout?.unpipe(standardStreams.stdout);
    childProcess.stderr?.unpipe(standardStreams.stderr);
};
// In tests, we push to the `logs` array instead
const pushOutputToLogs = function (childProcess, logs, outputFlusher) {
    const stdoutListener = logsListener.bind(null, logs.stdout, outputFlusher);
    const stderrListener = logsListener.bind(null, logs.stderr, outputFlusher);
    childProcess.stdout?.on('data', stdoutListener);
    childProcess.stderr?.on('data', stderrListener);
    return { stdoutListener, stderrListener };
};
const logsListener = function (logs, outputFlusher, chunk) {
    if (outputFlusher) {
        outputFlusher.flush();
    }
    logs.push(chunk.toString().trimEnd());
};
const unpushOutputToLogs = function (childProcess, stdoutListener, stderrListener) {
    childProcess.stdout?.removeListener('data', stdoutListener);
    childProcess.stderr?.removeListener('data', stderrListener);
};
