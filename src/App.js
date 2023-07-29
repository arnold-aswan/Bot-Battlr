import { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotCollection from "./components/YourBotCollection";
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
      console.log(error, "something went wrong");
    }
  }, []);

  const handleEnlist = (bot) => {
    const army = robots.filter((bots) => bots.id === bot);
    const yourArmy = [...yourBots, ...army];
    setYourBots(yourArmy);
  };

  const dischargeBot = (bot) => {
    console.log(bot);
    const notDischarge = yourBots.filter((bots) => bots.id !== bot.id);
    // const yourArmy = [notDischarge];
    console.log(notDischarge);
    setYourBots(notDischarge);
    console.log(yourBots);
  };

  return (
    <div className="app">
      <YourBotCollection
        enlisted={yourBots}
        shield={<GiTemplarShield />}
        attack={<GiCrossedSwords />}
        health={<BsHeartPulseFill />}
        discharge={dischargeBot}
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
