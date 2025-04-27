import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";

export const getAvailableServices = query({
  args: {
    location: v.optional(v.string())
  },
  handler: async (ctx, args) => {
    await getAuthUserId(ctx);
    const services = await ctx.db
      .query("ambulanceServices")
      .withIndex("by_location", (q) => 
        args.location ? q.eq("location", args.location) : q
      )
      .collect();
    
    return services.map(service => ({
      ...service,
      status: service.onDuty ? "Available" : "Busy",
      responseTime: service.onDuty ? "5-10 minutes" : "Unavailable"
    }));
  },
});

export const addService = mutation({
  args: {
    serviceName: v.string(),
    location: v.string(),
    contactNumber: v.string(),
    vehicleType: v.string(),
    driverName: v.string(),
    licenseNumber: v.string(),
  },
  handler: async (ctx, args) => {
    await getAuthUserId(ctx);
    await ctx.db.insert("ambulanceServices", {
      ...args,
      onDuty: true,
      lastUpdated: Date.now(),
    });
  },
});

export const updateServiceStatus = mutation({
  args: {
    serviceId: v.id("ambulanceServices"),
    onDuty: v.boolean(),
  },
  handler: async (ctx, args) => {
    await getAuthUserId(ctx);
    await ctx.db.patch(args.serviceId, {
      onDuty: args.onDuty,
      lastUpdated: Date.now(),
    });
  },
});
