// app/api/gptquestions/questions.ts
import { Configuration, OpenAIApi } from 'openai-edge';
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = 'edge';

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export async function POST(request: Request) {
    const { messages } = await request.json();

    // Add a system message with the required instructions
    const systemMessage = {
        role: 'system',
        content: 'Du är en hjälpsam AI som svarar på svenska. Förklara problemet steg för steg som en coach, med tanke på att användaren har ADHD. Ge tydliga, korta och enkla instruktioner. Använd gärna exempel för att förtydliga. Ge inte ut svaret, men vägled användaren mot att förstå hur man når svaret. Förenkla språket och håll det engagerande.'
    };

    // Prepend the system message to the user messages
    const updatedMessages = [systemMessage, ...messages];

    // Create chat completion with updated messages
    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        stream: true,
        messages: updatedMessages,
    });

    // Create a stream of data from OpenAI and send it as a response to the frontend
    const stream = await OpenAIStream(response);

    return new StreamingTextResponse(stream);
}
