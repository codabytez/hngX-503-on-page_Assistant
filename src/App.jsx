import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-4xl text-center text-blue-500 font-bold">
        Work in progress...
      </h1>
      <h2 className="text-2xl text-center text-blue-500 font-bold">
        Check back later! :)
      </h2>
    </>
  );
}

export default App;
