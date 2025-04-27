import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { getAuthUserId } from "@convex-dev/auth/server";

export const donate = mutation({
  args: {
    donorName: v.string(),
    bloodType: v.string(),
    units: v.number(),
    contactNumber: v.string(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");
    
    await ctx.db.insert("bloodDonations", {
      ...args,
      lastDonationDate: Date.now(),
    });
  },
});

export const getAvailableBlood = query({
  args: {
    bloodType: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    if (args.bloodType) {
      return await ctx.db
        .query("bloodDonations")
        .withIndex("by_blood_type", q => 
          q.eq("bloodType", args.bloodType!)
        )
        .collect();
    }
    return await ctx.db.query("bloodDonations").collect();
  },
});
