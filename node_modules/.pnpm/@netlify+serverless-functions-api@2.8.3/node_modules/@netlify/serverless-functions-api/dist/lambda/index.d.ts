import { V2Function } from '../function.js';
import '../fingerprint.js';
export declare const REQUEST_SIGNAL_BUFFER = 20;
/**
 * Returns a Lambda handler that wraps a given function.
 */
export declare const getLambdaHandler: (funcOrFuncPath: V2Function | string) => import("./handler.js").LambdaHandler;
