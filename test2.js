import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY 
});

async function run() {
  try {
    console.log("Connecting to Gemini API...");
    const response = await ai.models.list();

    // Check if models exist in the response
    const modelList = response.models || response;

    if (Array.isArray(modelList)) {
      console.log("\n✅ Available Models:");
      modelList.forEach(m => {
        console.log(`- ${m.name}`);
      });
    } else {
      console.log("Unexpected response format. Raw response:", response);
    }

  } catch (error) {
    console.error("❌ Error calling Gemini:", error.message);
  }
}

run();