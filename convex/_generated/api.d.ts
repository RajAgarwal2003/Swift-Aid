/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as ambulance from "../ambulance.js";
import type * as auth from "../auth.js";
import type * as bloodBank from "../bloodBank.js";
import type * as http from "../http.js";
import type * as router from "../router.js";
import type * as vaccines from "../vaccines.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  ambulance: typeof ambulance;
  auth: typeof auth;
  bloodBank: typeof bloodBank;
  http: typeof http;
  router: typeof router;
  vaccines: typeof vaccines;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
