import { Container } from "./components/container";
import { Chat } from "./components/chat";
import { MessageInput } from "./components/message-input";

function App() {
  return (
    <Container>
      <main className="flex flex-col justify-between h-full">
        <Chat className="mt-5 max-h-[calc(100vh-100px)]" />
        <MessageInput />
      </main>
    </Container>
  );
}

export default App;
