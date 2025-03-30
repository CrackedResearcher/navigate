import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);
const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction: "You are a Playwright automation expert. Your task is to analyze the user’s intent and generate a structured JSON output that defines the necessary browser actions for Playwright automation. Your output should include actions such as navigation, clicking, text input, form submission, and waiting for elements. The JSON should be formatted to be directly executable by Playwright.",
});


export async function POST(request: NextRequest) {
    try {
        const { prompt } = await request.json();

        if (!prompt) {
            return NextResponse.json(
                { error: "Prompt is required" },
                { status: 400 }
            );
        }

        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();
        
        try {
            const cleanText = text.replace(/```json\n?|\n?```/g, '');
            const jsonStart = cleanText.indexOf('{');
            const jsonEnd = cleanText.lastIndexOf('}') + 1;
            const jsonString = cleanText.slice(jsonStart, jsonEnd);
            
            console.log('Cleaned JSON string:', jsonString); 
            
            const parsedJson = JSON.parse(jsonString);
            return NextResponse.json({ result: parsedJson });
        } catch (parseError) {
            console.error('Parse error:', parseError);
            return NextResponse.json({ 
                result: text.replace(/```json\n?|\n?```/g, '')
            }); 
        }
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json(
            { error: "Failed to process request" },
            { status: 500 }
        );
    }
}