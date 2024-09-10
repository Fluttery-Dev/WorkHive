import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";

export const get = query({
    handler: async (ctx)=>{
        return await ctx.db.query("Workspace").collect();
    }
})

export const create = mutation({
    args: {name:v.string(), accessCode: v.string()},
    handler: async(ctx, args)=>{
        const userId = await getAuthUserId(ctx);
        const id = await ctx.db.insert("Workspace", {accessCode : args.accessCode, name: args.name, userId: userId!});
        console.log(id as string)
        return id as string
    }
})