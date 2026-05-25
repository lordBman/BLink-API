import jetLogger from "jet-logger";

import { Exception, Link } from "./models";

import db from "../database";
import { linksTable } from "../database/schema";
import { eq } from 'drizzle-orm';

namespace linkRepository {
    export const create = async (data: Partial<Link>): Promise<Link> =>{
        try{
            if(data.ownerID && data.name && data.url && data.originalURL){
                const results = await db.insert(linksTable).values({ ownerID: data.ownerID, name: data.name, url: data.url, originalURL: data.originalURL }).returning();
                
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

    export const get = async(id: string): Promise<Link> => {
        try{
            const results = await db.select().from(linksTable).where(eq(linksTable.id, id))
            if(results.length == 0){
                throw new Exception(404, "link not found")
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

    export const all = async(ownerID: string): Promise<Link[]> =>{
        try{
            const results = await db.select().from(linksTable).where(eq(linksTable.ownerID, ownerID))
           
            return results
        }catch(error){
            jetLogger.err(error)
            if(error instanceof Exception){
                throw error
            }else{
                throw new Exception(503, "internal server error")
            }
        }
    }

    export const update = async(id: string, data: Partial<Link>): Promise<Link> =>{
        try{
            const results = await db.update(linksTable).set(data).where(eq(linksTable.id, id)).returning();
            if(results.length == 0){
                throw new Exception(404, "link not found")
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

    export const remove = async(id: string): Promise<Link> =>{
        try{
            const results = await db.delete(linksTable).where(eq(linksTable.id, id)).returning();
            if(results.length == 0){
                throw new Exception(404, "link does not exist")
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

export default linkRepository;