import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_OPENAI_API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: {
    candidateCount: 1,           
    maxOutputTokens: 250,        
    temperature: 0.7,            
    topP: 0.9,                   
    stopSequences: [],
  },
  
});

export async function getChat(prompt) {
  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.log("Error with Api", error);
  }
}
