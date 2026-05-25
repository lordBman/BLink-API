import jetLogger from "jet-logger";

import { Auth, Exception } from "./models";

import db from "../database";
import { authTable } from "../database/schema";
import { eq } from 'drizzle-orm';

namespace authRepository{
    export const create = async (data: Partial<Auth>): Promise<Auth> => {
        try{
            if(data.userID && data.password){
                const results = await db.insert(authTable).values({ userID: data.userID, password: data.password, ...data }).returning();
                
                return results[0]
            }else{
                throw new Exception(401, "invalid request")
            }
        }catch(error){
            jetLogger.err(error)
            if(error instanceof Exception){
                throw error
            }else{
                throw new Exception(503, "internal server error")
            }
        }
    }

    export const get = async (userID: string): Promise<Auth> =>{
        try{
            const results = await db.select().from(authTable).where(eq(authTable.userID, userID))
            if(results.length == 0){
                throw new Exception(404, "user auth details not found")
            }
            return results[0]
        }catch(error){
            jetLogger.err(error)
            if(error instanceof Exception){
                throw error
            }else{
                throw new Exception(503, "internal server error")
            }
        }
    }

    export const update = async (id: string, data: Partial<Auth>): Promise<Auth> => {
        try{
            const results = await db.update(authTable).set(data).where(eq(authTable.userID, id)).returning();
            if(results.length == 0){
                throw new Exception(404, "user auth details not found")
            }
            return results[0]
        }catch(error){
            jetLogger.err(error)
            if(error instanceof Exception){
                throw error
            }else{
                throw new Exception(503, "internal server error")
            }
        }
    }

    export const remove = async (id: string): Promise<Auth> => {
        try{
            const results = await db.delete(authTable).where(eq(authTable.userID, id)).returning();
            if(results.length == 0){
                throw new Exception(404, "user auth details does not exist")
            }

            return results[0]
        }catch(error){
            jetLogger.err(error)
            if(error instanceof Exception){
                throw error
            }else{
                throw new Exception(503, "internal server error")
            }
        }
    }
}

export default authRepository