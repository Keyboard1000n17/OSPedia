import { Context } from './context.js';
export type RequestHandler = (req: Request, context: Context) => Promise<Response | void>;
export type V2Function = {
    default: RequestHandler;
};
