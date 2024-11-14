import { LlamaAI as ai } from "llamaai";
import { useState } from "react";
import { Container } from "./components/container";
import { Chat } from "./components/chat";

// interface Choice {
//   finish_reason: string;
//   index: number;
//   message: {
//     content: string;
//   };
// }

// interface LlamaResponse {
//   choices: Choice[];
// }

function App() {
  // const [response, setResponse] = useState("");

  // const apiToken = import.meta.env.VITE_API_TOKEN as string;
  // const llamaAPI = new ai(apiToken);

  // const apiRequestJson = {
  //   messages: [
  //     {
  //       role: "user",
  //       content:
  //         "Quem é Kleber BamBam?",
  //     },
  //   ],
  // };

  // async function handleClick() {
  //   llamaAPI
  //     .run(apiRequestJson)
  //     .then((res: LlamaResponse) => {
  //       const data = res.choices[0].message.content;
  //       setResponse(data);
  //     })
  //     .catch((error: Error) => {
  //       console.log(apiToken);
  //       setResponse(error.message);
  //     });
  // }

  return (
    <Container>
      <main className="flex flex-col justify-between h-full">
        <Chat className="mt-5 max-h-[calc(100vh-100px)]" />
        <div className="flex gap-3 mb-10">
          <input
            className="w-full py-3 rounded border px-1"
            type="text"
            placeholder="Digite um texto..."
          />
          <button className="bg-blue-500 text-white px-4 border rounded">
            Send
          </button>
        </div>
      </main>
    </Container>
  );
}

export default App;
