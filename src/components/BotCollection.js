import React from "react";
import { GiTemplarShield, GiCrossedSwords } from "react-icons/gi";
import { BsHeartPulseFill } from "react-icons/bs";

import "./BotCollection.css";

function BotCollection({ renderBots, enlist }) {
  const handleClick = (bot) => {
    enlist(bot);
  };

  const botCards = (bots) => {
    return bots.map((bot) => {
      return (
        <article
          key={bot.id}
          className="botCard"
          onClick={() => handleClick(bot.id)}
        >
          <div className="botAvatar">
            <img src={bot.avatar_url} alt="bot_image" />
          </div>
          <div className="botBody">
            <div className="botInfo">
              <h3 className="botName">{bot.name}</h3>
              <p className="botCatchPhrase">{bot.catchphrase}</p>
            </div>
            <div className="botStats">
              <ul className="stats">
                <li className="stat">
                  <BsHeartPulseFill />
                  {bot.health}
                </li>
                <li className="stat">
                  <GiCrossedSwords />
                  {bot.damage}
                </li>
                <li className="stat">
                  <GiTemplarShield />
                  {bot.armor}
                </li>
              </ul>
            </div>
          </div>
        </article>
      );
    });
  };

  return <div className="robotsCollection">{botCards(renderBots)}</div>;
}

export default BotCollection;
