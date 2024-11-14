import { LlamaAI as ai } from "llamaai";
import { apiToken } from "../utils/api-token";
import { useContext, useEffect, useState } from "react";
import { MessageContext } from "../services/message-context";

interface Choice {
  finish_reason: string;
  index: number;
  message: {
    content: string;
  };
}

interface LlamaResponse {
  choices: Choice[];
}

interface MessageHistory {
  role: string;
  content: string;
}

export function Chat({ className }: { className: string }) {
  const [messageHistory, setMessageHistory] = useState<MessageHistory[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [prevMessage, setPrevMessage]: any = useState("");
  const { message } = useContext(MessageContext);
  const llamaAPI = new ai(apiToken);

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        setIsLoading(true);

        const apiRequest = {
          messages: [
            ...messageHistory.map((msg) => ({
              role: msg.role,
              content: msg.content,
            })),
            { role: "user", content: message },
          ],
        };

        const res: LlamaResponse = await llamaAPI.run(apiRequest);
        const data = res.choices[0].message.content;

        setMessageHistory((prevHistory: any) => [
          ...prevHistory,
          { role: "assistant", content: data },
        ]);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (message !== "" && message !== prevMessage) {
      setMessageHistory((prevHistory: any) => [
        ...prevHistory,
        { role: "user", content: message },
      ]);
      setPrevMessage(message); 
      fetchResponse();
    }
  }, [message, messageHistory, prevMessage]);

  return (
    <main className={`flex flex-col justify-between ${className}`}>
      <header className="flex text-white bg-blue-400 py-4 px-2 rounded">
        <h1>ReactAI</h1>
      </header>
      <section className="main mt-3 w-full flex gap-3 flex-col overflow-y-auto">
        {messageHistory.map((msg, index) => (
          <div
            key={index}
            className={`w-full flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div className="relative">
              <p
                className={`${
                  msg.role === "user" ? "bg-gray-100" : "bg-blue-100"
                } p-2 rounded inline-block max-w-96`}
              >
                {msg.content}
              </p>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="left w-full flex justify-start">
            <div className="relative">
              <p className="bg-blue-100 p-2 rounded inline-block max-w-96">
                Carregando...
              </p>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
