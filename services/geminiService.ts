
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the Zenyum Smile Assistant, a friendly and professional expert on invisible braces and smile cosmetics. 
Your goal is to help potential customers in Hong Kong understand how Zenyum works and encourage them to book a free consultation.

Key Knowledge:
- Zenyum provides 3D-printed invisible braces (aligners).
- The process starts with a free pre-assessment online, followed by a clinical consultation.
- We have locations in Mong Kok and Causeway Bay.
- Consultations include a 3D intraoral scan and X-ray.
- Prices are transparent and often 70% cheaper than traditional braces.
- Treatment typically takes 3-9 months.

Tone: Professional, warm, encouraging, and clear. 
Language: Support both English and Traditional Chinese (Cantonese context).
`;

export async function getSmileAssistantResponse(history: Message[], userInput: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(m => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }]
        })),
        { role: 'user', parts: [{ text: userInput }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that. Please try asking about our treatment process or booking!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our assistant is currently taking a short break. Please feel free to book your consultation directly using the form below!";
  }
}
