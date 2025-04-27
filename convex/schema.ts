import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

export default defineSchema({
  ...authTables,
  ambulanceServices: defineTable({
    serviceName: v.string(),
    location: v.string(),
    contactNumber: v.string(),
    vehicleType: v.string(),
    driverName: v.string(),
    licenseNumber: v.string(),
    onDuty: v.boolean(),
    lastUpdated: v.number(),
  })
    .index("by_location", ["location"])
    .index("by_status", ["onDuty"]),
  
  bloodDonations: defineTable({
    donorName: v.string(),
    bloodType: v.string(),
    units: v.number(),
    contactNumber: v.string(),
    lastDonationDate: v.number(),
  }).index("by_blood_type", ["bloodType"]),

  vaccineRecords: defineTable({
    childName: v.string(),
    dateOfBirth: v.number(),
    vaccines: v.array(
      v.object({
        name: v.string(),
        date: v.number(),
        dueDate: v.number(),
        completed: v.boolean(),
      })
    ),
  }),
});
