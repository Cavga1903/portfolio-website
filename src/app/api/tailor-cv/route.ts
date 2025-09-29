import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";
import { PERSONAL_INFO } from "@/data/personalInfo";
import { EXPERIENCES } from "@/data/experience";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { jobDescription } = await req.json();

    if (!jobDescription) {
      return NextResponse.json({ error: "Job description is required" }, { status: 400 });
    }

    if (!process.env.GOOGLE_API_KEY || process.env.GOOGLE_API_KEY === "your_google_api_key_here") {
      return NextResponse.json({ 
        error: "Google API key not configured. Please add your API key to .env.local file." 
      }, { status: 500 });
    }

    // AI Modelini Yapılandır
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // AI'ya Gönderilecek Prompt (Talimat)
    const prompt = `
You are a professional career coach. Your task is to rewrite a person's CV summary and experience descriptions to perfectly match a given job description.

Here is the person's original CV data:
- Name: ${PERSONAL_INFO.name}
- Current Title: ${PERSONAL_INFO.title}
- Summary: ${PERSONAL_INFO.description}
- Experiences: ${JSON.stringify(EXPERIENCES, null, 2)}

Here is the target job description:
"${jobDescription}"

Please provide a new, tailored summary and new descriptions for each experience. Focus on keywords from the job description and highlight relevant skills. Make the content professional and compelling. Respond ONLY with a valid JSON object with the following structure:
{
  "summary": "A new summary tailored for the job, highlighting relevant skills and experience.",
  "experiences": [
    {
      "title": "React Native Developer | Freelance",
      "company": "Upwork",
      "newDescription": "A new description tailored for the job, emphasizing relevant achievements and skills."
    }
  ]
}
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // AI'dan gelen JSON'ı parse et ve gönder
    const tailoredCV = JSON.parse(text);
    return NextResponse.json(tailoredCV);

  } catch (error) {
    console.error("AI CV tailoring error:", error);
    return NextResponse.json({ 
      error: "Failed to generate tailored CV. Please try again." 
    }, { status: 500 });
  }
}
