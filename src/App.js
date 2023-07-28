import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotCollection from "./components/YourBotCollection";
// import { GiTemplarShield, GiCrossedSwords } from "react-icons/gi";
// import { BsHeartPulseFill } from "react-icons/bs";

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
    console.log(bot);
    const army = robots.filter((bots) => bots.id === bot);
    setYourBots([...yourBots, army]);
    // console.log(yourBots);
  };

  // const botCards = (bots) => {
  //   return bots.map((bot) => {
  //     return (
  //       <article
  //         key={bot.id}
  //         className="botCard"
  //         onClick={() => handleEnlist(bot.id)}
  //       >
  //         <div className="botAvatar">
  //           <img src={bot.avatar_url} alt="bot_image" />
  //         </div>
  //         <div className="botBody">
  //           <div className="botInfo">
  //             <h3 className="botName">{bot.name}</h3>
  //             <p className="botCatchPhrase">{bot.catchphrase}</p>
  //           </div>
  //           <div className="botStats">
  //             <ul className="stats">
  //               <li className="stat">
  //                 <BsHeartPulseFill />
  //                 {bot.health}
  //               </li>
  //               <li className="stat">
  //                 <GiCrossedSwords />
  //                 {bot.damage}
  //               </li>
  //               <li className="stat">
  //                 <GiTemplarShield />
  //                 {bot.armor}
  //               </li>
  //             </ul>
  //           </div>
  //         </div>
  //       </article>
  //     );
  //   });
  // };

  // const handleClick = (bot) => {
  //   enlist(bot);
  // };

  return (
    <div className="app">
      <YourBotCollection
        enlisted={yourBots}
        shield={GiTemplarShield}
        attack={GiCrossedSwords}
        health={BsHeartPulseFill}
      />
      <BotCollection renderBots={robots} enlist={handleEnlist} />
    </div>
  );
}

export default App;
