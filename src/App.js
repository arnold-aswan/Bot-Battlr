import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";

function App() {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    try {
      fetch("http://localhost:3000/bots")
        .then((r) => r.json())
        .then((bots) => setRobots(bots));
    } catch (error) {
      console.log(error, "something went wrong");
    }
  }, []);

  return (
    <div className="app">
      <BotCollection renderBots={robots} />
    </div>
  );
}

export default App;
