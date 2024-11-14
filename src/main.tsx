import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MessageContextProvider from "./services/message-context.tsx";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MessageContextProvider>
      <App />
    </MessageContextProvider>
  </StrictMode>
);
