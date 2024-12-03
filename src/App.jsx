import "./App.css";
import FirstComp from "./components/FirstComp";
import { useStoreContext } from "./context/store";

function App() {
  const {newState, setNewState} = useStoreContext();
  return (
    <>
      <h1>Oh God it's {newState ? "true😀" : "false😒"}</h1>
      <button onClick={() => setNewState((prev) => !prev)}>Change State</button>
      <FirstComp />
    </>
  );
}

export default App;
