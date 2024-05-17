"use client"
import { useChat, Message } from "ai/react";
import { FormEvent } from "react";

export default function ChatComponent() {
    const { input, setInput, handleInputChange, handleSubmit, isLoading, messages } = useChat();

    console.log("Messages:", messages);
    console.log("Input:", input);

    return (
        <div>
            {messages.map((message: Message) => (
                <div key={message.id} className="border border-gray-300 p-4 mb-4 rounded-lg bg-gray-50 text-black font-bold">
                    {
                        message.role === "assistant"
                            ? <h3 className="text-lg font-semibold mt-2">AI assistant</h3>
                            : <h3 className="text-lg font-semibold mt-2">Användare</h3>
                    }
                    {message.content.split("\n").map((currentTextBlock: string, index: number) => (
                        currentTextBlock === ""
                            ? <p key={message.id + index}>&nbsp;</p>
                            : <p key={message.id + index}>{currentTextBlock}</p>
                    ))}
                </div>
            ))}

            <form className="mt-12" onSubmit={handleSubmit}>
                <p>Användarfråga</p>
                <textarea
                    className="mt-2 w-full bg-slate-500 p-2 border border-gray-300 rounded-lg"
                    placeholder={"Vad behöver du hjälp med idag?"}
                    value={input}
                    onChange={handleInputChange}
                />
                <button className="rounded-md bg-blue-600 p-2 mt-2 text-white">
                    Skicka fråga
                </button>
            </form>
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