import session from "express-session";
import { Request } from "express";

export type SessionWithUser = session & {userId:string, createdDate:number | {}}

/*declare module session {
    export interface SessionData {
        userId:string,
        createdDate:number
    }
}*/

declare interface PublicRequest extends Request{}

declare interface AuthRequest extends Request{
    session?:SessionWithUser
}

