import { sql } from "drizzle-orm";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { randomUUID } from 'node:crypto';

export const usersTable = sqliteTable("users", {
    id: text("id").primaryKey().$defaultFn(() => randomUUID()),

    fname: text("fname").notNull(),
    lname: text("lname").notNull(),
    
    email: text("email").notNull().unique()
});

export const authTable = sqliteTable("auths", {
    userID: text("user_id").references(() => usersTable.id, { 
        onDelete: "cascade", 
        onUpdate: "no action" 
    }).notNull(),

    password: text("password").notNull(),
    role: text("role").notNull().default("user")
});

export const linksTable = sqliteTable("links", {
    id: text("id").primaryKey().$defaultFn(() => randomUUID()),
    
    name: text("name").notNull(),
    url: text("url").notNull(),
    originalURL: text("original_url").notNull(),

    active: int('active', { mode: 'boolean' }).notNull().default(true),
    createdAt: int("created_at", { mode: "timestamp" }).notNull().default(sql`(unixepoch())`),

    ownerID: text("owner_id").references(() => usersTable.id, { 
        onDelete: "cascade", 
        onUpdate: "no action" 
    }).notNull(),
})