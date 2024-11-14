import React, { createContext, useState } from "react";

interface MessageProps {
  message: string | null;
  setMessage: React.Dispatch<React.SetStateAction<string>> | null;
}

const MessageContext = createContext<MessageProps>({
  message: "",
  setMessage: () => {},
});

function MessageContextProvider({ children }: { children: React.ReactNode }) {
  const [message, setMessage] = useState("");

  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      {children}
    </MessageContext.Provider>
  );
}

export default MessageContextProvider;
