import { LlamaAI as ai } from "llamaai";
import { useState } from "react";

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

function App() {
  const [response, setResponse] = useState("");

  const apiToken = import.meta.env.VITE_API_TOKEN as string;
  const llamaAPI = new ai(apiToken);

  const apiRequestJson = {
    messages: [
      {
        role: "user",
        content:
          "Quem é Kleber BamBam?",
      },
    ],
  };

  async function handleClick() {
    llamaAPI
      .run(apiRequestJson)
      .then((res: LlamaResponse) => {
        const data = res.choices[0].message.content;
        setResponse(data);
      })
      .catch((error: Error) => {
        console.log(apiToken);
        setResponse(error.message);
      });
  }
  return (
    <div className="App">
      <button onClick={handleClick}>TESTE</button>
      <div>{response !== "" && <p>{response}</p>}</div>
    </div>
  );
}

export default App;
