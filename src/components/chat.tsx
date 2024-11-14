// componente responsável por processar e renderizar as respostas da API

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

export function Chat({ className }: { className: string }) {
  const [response, setResponse] = useState("");
  const [messageHistory, setMessageHistory] = useState([""]);
  const { message } = useContext(MessageContext);
  const llamaAPI = new ai(apiToken);

  const apiRequest = {
    messages: [
      {
        role: "user",
        content: message === "" ? "Olá!" : message,
      },
    ],
  };

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const res: LlamaResponse = await llamaAPI.run(apiRequest);
        console.log(res);
        const data = res.choices[0].message.content;

        setMessageHistory([...messageHistory, data]);
        setResponse(data);
      } catch (error: any) {
        console.error(error);
        setResponse(error);
      }
    };

    fetchResponse();
  }, [message]);

  return (
    <main className={`flex flex-col justify-between ${className}`}>
      <header className="flex text-white bg-blue-400 py-4 px-2 rounded">
        <h1>ReactAI</h1>
      </header>
      <section className="main mt-3 w-full flex gap-3 flex-col overflow-y-auto">
        {message !== undefined && (
          <div className="right w-full flex justify-end">
            <div className="relative">
              <p className="bg-gray-100 p-2 rounded inline-block">
                {message || "Olá!"}
              </p>
            </div>
          </div>
        )}
        {response !== "" && (
          <div className="left w-full flex justify-start">
            <div className="relative">
              <p className="bg-blue-100 p-2 rounded inline-block max-w-96">
                {response}
              </p>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
