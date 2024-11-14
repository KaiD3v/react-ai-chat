import { Container } from "./components/container";
import { Chat } from "./components/chat";
import { MessageInput } from "./components/message-input";



function App() {
  // const [response, setResponse] = useState("");

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

  // 

  return (
    <Container>
      <main className="flex flex-col justify-between h-full">
        <Chat className="mt-5 max-h-[calc(100vh-100px)]" askText="Como peidar na farofa?" />
        <MessageInput />
      </main>
    </Container>
  );
}

export default App;
