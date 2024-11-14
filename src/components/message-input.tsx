// responsável por enviar respostar para a api

import { useContext, useState } from "react";
import { MessageContext } from "../services/message-context";

export function MessageInput() {
  const [inputMessage, setInputMessage] = useState("");
  const { setMessage } = useContext(MessageContext);

  function sendMessage() {
    setMessage(inputMessage);
    setInputMessage("");
  }

  return (
    <div className="flex gap-3 mb-10">
      <textarea
        className="w-full items-center rounded border px-1 resize-none"
        placeholder="Digite a sua pergunta..."
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
      ></textarea>
      <button
        onClick={sendMessage}
        className="bg-blue-500 text-white px-4 border rounded"
      >
        Send
      </button>
    </div>
  );
}
