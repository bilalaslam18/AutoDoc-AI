import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { PromptTemplate } from "@langchain/core/prompts";

const llm = new ChatGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY,
  model: "gemini-1.5-pro",
  temperature: 0,
  maxRetries: 2,
});

const prompt = PromptTemplate.fromTemplate(`
    You are a senior software engineer with deep expertise in code analysis. 
    Carefully read the following code and provide a concise yet comprehensive summary that includes:
    
    - The purpose and functionality of the code
    - The main components, functions, or classes and their roles
    - Any important logic or algorithms used
    - External dependencies or libraries
    - Input/output behavior
    - Potential edge cases or limitations
    - Anything unusual or noteworthy in the implementation
    
    Code:
    {code}
`);

const chain = prompt.pipe(llm);

export async function summarizeCode(code: string) {
  try {
    const response = await chain.invoke({ code });
    return response;
  } catch (error) {
    throw {
      message: "Error summarizing code",
      error: error instanceof Error ? error.message : String(error),
    };
  }
}
