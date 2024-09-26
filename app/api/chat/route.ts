import OpenAI from 'openai';
//import dotenv from 'dotenv';

import { OpenAIStream, StreamingTextResponse } from 'ai';

// Loome OpenAI kliendi instantsi
//dotenv.config();

console.log('OPENAI_API_KEY:', process.env.OPENAI_API_KEY);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
// Määrame Edge runtime'i
export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    // Logime päringu saamise
    console.log('Received request');

    // Parsime sõnumid päringu kehast
    const { messages } = await req.json();
    console.log('Messages:', messages);

    // Loome vestluse OpenAI API-ga
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      stream: true,
      messages: [
        { role: 'system', content: 'Olet EcoTrack-sovelluksen avustaja. Auta käyttäjiä ymmärtämään ja pienentämään hiilijalanjälkeään.' },
        ...messages
      ]
    });

    console.log('OpenAI API response received');

    // Loome voo vastusest
    const stream = OpenAIStream(response);
    console.log('Stream created');
    
    // Tagastame voogedastatud vastuse
    return new StreamingTextResponse(stream);
  } catch (error) {
    console.error('Error in chat route:', error);
    return new Response('An error occurred', { status: 500 });
  }
}