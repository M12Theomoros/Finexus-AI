import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "Finexus-AI", // Unique app ID
  name: "Finexus AI",
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});
