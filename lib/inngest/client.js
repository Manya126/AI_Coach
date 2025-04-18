import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "ai-coach", // Unique app ID
  name: "ai_coach",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
