import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

// Initialize the client
const ai = new GoogleGenAI({
  apiKey: `${process.env.GEMINI_API_KEY}` 
});

async function run() {
  try {
    // NEW SYNTAX: Use ai.models.generateContent
    const result = await ai.models.generateContent({
      model: "gemini-3-flash-preview", 
      contents: [{ role: "user", parts: [{ text: "Hi, which version are you?" }] }]
    });

    console.log(result.text); 
  } catch (error) {
    console.error("Error calling Gemini:", error);
  }
}

run();