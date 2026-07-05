import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
  /** The secret used to sign the JWT (optional if you're using the same domain) */
  secret:
    process.env.BETTER_AUTH_SECRET ||
    "FHOMxnCVZ2JDrnl+COOYbCIikD7iRjL9FBg6pX2fEg8=",
});
