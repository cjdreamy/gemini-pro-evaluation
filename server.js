import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import express from "express";
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));  
app.get("/", (req, res) => {
    res.render("index");
});

dotenv.config();

// Initialize the client
const ai = new GoogleGenAI({
  apiKey: `${process.env.GEMINI_API_KEY}` 
});

app.post("/chat", async (req, res) => {
    const prompt = req.body.prompt;
    const result = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [{ role: "user", parts: [{ text: prompt }] }]
    });
    res.render("index", { response: result.text });
});

// async function run() {
//   try {
//     // NEW SYNTAX: Use ai.models.generateContent
//     const result = await ai.models.generateContent({
//       model: "gemini-3-flash-preview", 
//       contents: [{ role: "user", parts: [{ text: "Hi, which version are you?" }] }]
//     });

//     console.log(result.text); 
//   } catch (error) {
//     console.error("Error calling Gemini:", error);
//   }
// }

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
// run();