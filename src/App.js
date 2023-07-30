import { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import { GiTemplarShield, GiCrossedSwords } from "react-icons/gi";
import { BsHeartPulseFill } from "react-icons/bs";
import "./App.css";
import BotSpecs from "./components/BotSpecs";

function App() {
  const [robots, setRobots] = useState([]);
  const [yourBots, setYourBots] = useState([]);
  const [selectedBotIndex, setSelectedBotIndex] = useState(null);

  useEffect(() => {
    try {
      fetch("http://localhost:3000/bots")
        .then((r) => r.json())
        .then((bots) => setRobots(bots));
    } catch (error) {
      console.log("Error fetching bots data: ", error);
    }
  }, []);

  const botSpec = (data) => {
    console.log(data);
    setSelectedBotIndex(data);
  };

  const handleEnlist = (bot) => {
    const army = robots.filter((bots) => bots.id === bot);
    const yourArmy = [...yourBots, ...army];
    setYourBots(yourArmy);
    setSelectedBotIndex(null);

    // Bot removed from bot colllection and added to your army
    const remRobots = robots.filter((bots) => bots.id !== bot);
    // console.log(remRobots);
    setRobots(remRobots);
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
      {selectedBotIndex !== null ? (
        <BotSpecs
          bot={robots[selectedBotIndex]}
          shield={
            <GiTemplarShield style={{ color: "blue", fontSize: "2rem" }} />
          }
          attack={
            <GiCrossedSwords style={{ color: "green", fontSize: "2rem" }} />
          }
          health={
            <BsHeartPulseFill style={{ color: "red", fontSize: "2rem" }} />
          }
          setSelectedBotIndex={setSelectedBotIndex}
          enlistBot={handleEnlist}
        />
      ) : (
        <BotCollection
          renderBots={robots}
          enlist={handleEnlist}
          shield={<GiTemplarShield />}
          attack={<GiCrossedSwords />}
          health={<BsHeartPulseFill />}
          BotSpecs={botSpec}
        />
      )}
    </div>
  );
}

export default App;
