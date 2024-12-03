import { createContext, useContext, useState } from "react";

const storeContext = createContext();

export default function ContextProvider({ children }) {
  const [newState, setNewState] = useState(false);
  const [text, setText] = useState("Hello this text will be passed as props");

  return (
    <storeContext.Provider value={{ newState, setNewState, text }}>
      {children}
    </storeContext.Provider>
  );
}

export const useStoreContext = () => {
  const context = useContext(storeContext);
  if (context) {
    return context;
  }
  throw new Error("The context is null!!");
};
