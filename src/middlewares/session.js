import { getUserData } from "../utility.js";


export function addSession(ctx, next) {
    ctx.user = getUserData();
    
    next();
}