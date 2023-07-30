import { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import { GiTemplarShield, GiCrossedSwords } from "react-icons/gi";
import { BsHeartPulseFill } from "react-icons/bs";
import "./App.css";

function App() {
  const [robots, setRobots] = useState([]);
  const [yourBots, setYourBots] = useState([]);

  useEffect(() => {
    try {
      fetch("http://localhost:3000/bots")
        .then((r) => r.json())
        .then((bots) => setRobots(bots));
    } catch (error) {
      console.log("Error fetching bots data: ", error);
    }
  }, []);

  const handleEnlist = (bot) => {
    const army = robots.filter((bots) => bots.id === bot);
    const yourArmy = [...yourBots, ...army];
    setYourBots(yourArmy);
  };

  const dischargeBot = (bot) => {
    setYourBots(bot);
  };

  return (
    <div className="app">
      <YourBotArmy
        enlisted={yourBots}
        shield={<GiTemplarShield style={{ color: "blue" }} />}
        attack={<GiCrossedSwords style={{ color: "green" }} />}
        health={<BsHeartPulseFill style={{ color: "red" }} />}
        release={dischargeBot}
      />
      <BotCollection
        renderBots={robots}
        enlist={handleEnlist}
        shield={<GiTemplarShield />}
        attack={<GiCrossedSwords />}
        health={<BsHeartPulseFill />}
      />
    </div>
  );
}

export default App;
