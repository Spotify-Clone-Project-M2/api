import 'express';

declare module 'express' {
    export interface Response {
        sendResponse?: (body?: any) => Response;
    }
}
