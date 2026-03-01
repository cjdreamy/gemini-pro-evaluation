import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: `${process.env.GEMINI_API_KEY}` 
});


// async function run() {
//   try {
//      const models = await ai.models.list();
// console.log(models.map(m => m.name)); 
//   } catch (error) {
//     console.error("Error calling Gemini:", error);
//   }
// }


// async function run2() {
//   try {
//     // The list() method returns a Pager object
//     const response = await ai.models.list();
    
//     // Use response.models to get the array
//     console.log("Available Models:");
//     response.models.forEach(m => {
//       console.log(`- ${m.name}`);
//     });

//   } catch (error) {
//     console.error("Error calling Gemini:", error);
//   }
// }



async function run3() {
  try {
    console.log("Fetching available models...");
    
    // In the new SDK, list() returns an iterable pager
    const response = await ai.models.list();

    // Use a for...of loop to iterate through the models
    for (const model of response) {
      console.log(`- ${model.name} (Supports: ${model.supportedGenerationMethods})`);
    }

  } catch (error) {
    console.error("Error calling Gemini:", error);
  }
}

run3();