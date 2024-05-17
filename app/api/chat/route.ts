// app/api/gptquestions/questions.ts
import {Configuration, OpenAIApi} from 'openai-edge';
import {OpenAIStream, StreamingTextResponse} from "ai";


export const runtime = 'edge';

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
   
});

const openai = new OpenAIApi(config);

export async function POST(request: Request) {

    const {messages} = await request.json();


    //messages [{user and he says "hello there"}]


    //createchatcompletion (get response from gpt-4)
    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        stream: true,
        messages: messages,
    });
    // create a stream of data from OpenAI {stream data to the frontend}

    const stream = await OpenAIStream(response);

    //send the stream as a response to the frontend / client


    return new StreamingTextResponse(stream)


}




