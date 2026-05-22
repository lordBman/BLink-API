import jetLogger from "jet-logger";

import { Exception, User } from "./models";

import db from "../database";
import { usersTable } from "../database/schema";
import { eq } from 'drizzle-orm';

namespace UserRepository {
    export const create = async(data: Partial<User>): Promise<User> =>{
        try{
            if(data.email && data.fname && data.lname){
                const results = await db.insert(usersTable).values({ fname: data.fname, lname: data.lname, email: data.email }).returning();

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

    export const get = async(id: string): Promise<User> => {
        try{
            const results = await db.select().from(usersTable).where(eq(usersTable.id, id))
            if(results.length == 0){
                throw new Exception(404, "user not found")
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

    export const find = async(email: string): Promise<User> =>{
        try{
            const results = await db.select().from(usersTable).where(eq(usersTable.email, email))
            if(results.length == 0){
                throw new Exception(404, "email not found")
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

    export const all = async(): Promise<User[]> =>{
        try{
            return await db.select().from(usersTable)
        }catch(error){
            jetLogger.err(error)
            if(error instanceof Exception){
                throw error
            }else{
                throw new Exception(503, "internal server error")
            }
        }
    }

    export const update = async(id: string, data: Partial<User>): Promise<User> => {
        try{
            const results = await db.update(usersTable).set(data).where(eq(usersTable.id, id)).returning();
            if(results.length == 0){
                throw new Exception(404, "user not found")
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

    export const remove = async(id: string): Promise<User>  =>{
        try{
            const results = await db.delete(usersTable).where(eq(usersTable.id, id)).returning();
            if(results.length == 0){
                throw new Exception(404, "user does not ex")
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

export default UserRepository