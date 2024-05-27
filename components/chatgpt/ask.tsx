"use client"
import { useChat, Message } from "ai/react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ChatComponent() {
    const { input, handleInputChange, handleSubmit, messages } = useChat();

    
    console.log("Messages:", messages);
    console.log("Input:", input);
    

    return (
        <div className="flex flex-row items-start mt-20">
        
        <form className="w-[500px] max-w-2xl mb-4" onSubmit={handleSubmit}>
            <p className="font-bold text-black dark:text-white mb-2">Skriv här</p>
            <textarea
                className="w-full h-[150px] p-4 border border-gray-500 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300 resize-none"
                placeholder="Jag behöver hjälp att plugga på ekvationstabellen, allt från 1ans till 10ans. Hur ska jag börja för att göra det?"
                value={input}
                onChange={handleInputChange}
            />
            <Button className="mt-2 bg-blue-600 text-white p-4 rounded-md">
                Skicka
            </Button>
        </form>

        {messages.length > 0 && (
            <ScrollArea className="w-full max-w-5xl h-96 overflow-y-auto border border-gray-200 rounded-lg p-4  ml-4">
                {messages.map((message: Message) => (
                    <div key={message.id} className="mb-4">
                        <div className={`p-4 rounded-lg ${message.role === "assistant" ? 'bg-blue-100 text-black' : 'bg-gray-200 text-black'}`}>
                            {
                                message.role === "assistant"
                                    ? <h3 className="text-lg font-semibold">AI assistant</h3>
                                    : <h3 className="text-lg font-bold">Du</h3>
                            }
                            {message.content.split("\n").map((currentTextBlock: string, index: number) => (
                                currentTextBlock === ""
                                    ? <p key={message.id + index}>&nbsp;</p>
                                    : <p key={message.id + index}>{currentTextBlock}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </ScrollArea>
        )}
    </div>
    );
}














/*
export default function Ask() {

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [loading, setLoading] = useState(false);

const {input, handleInputChange, handleSubmit, messages} = useChat();

console.log(messages);
console.log(input);
return (
    <div className="p-8">
        <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
                Ask a question
            </label>
            <textarea
                className="shadow text-black text-bold appearance-none border rounded w-full py-2 bg-white"
                rows={4}
                value={input}
                onChange={handleInputChange}
            ></textarea>
        </div>
        <form onSubmit={handleSubmit}>
            <Button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
                disabled={loading}
            >
                Ask
            </Button>
        </form>

        {loading && <div className="text-blue-500">Loading...</div>}
        {answer && (
            <div className="mt-4 bg-gray-100 p-4 border rounded">
                <strong className="text-black">Answer:</strong>
                <p className="text-black text-semibold">{answer}</p>
            </div>
        )}
    </div>
);


}
*/