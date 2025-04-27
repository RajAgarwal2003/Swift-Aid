import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { getAuthUserId } from "@convex-dev/auth/server";

export const addChildRecord = mutation({
  args: {
    childName: v.string(),
    dateOfBirth: v.number(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");
    
    await ctx.db.insert("vaccineRecords", {
      ...args,
      vaccines: [],
    });
  },
});

export const addVaccine = mutation({
  args: {
    recordId: v.id("vaccineRecords"),
    vaccine: v.object({
      name: v.string(),
      date: v.number(),
      dueDate: v.number(),
      completed: v.boolean(),
    }),
  },
  handler: async (ctx, args) => {
    const record = await ctx.db.get(args.recordId);
    if (!record) throw new Error("Record not found");
    
    await ctx.db.patch(args.recordId, {
      vaccines: [...record.vaccines, args.vaccine],
    });
  },
});

export const getChildRecords = query({
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return [];
    
    return await ctx.db
      .query("vaccineRecords")
      .collect();
  },
});
