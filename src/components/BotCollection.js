import React from "react";

import "./BotCollection.css";

function BotCollection({
  renderBots,
  enlist,
  shield,
  attack,
  health,
  BotSpecs,
}) {
  // const handleClick = (bot) => {
  //   enlist(bot);
  // };

  const handleBotSpecs = (botId) => {
    BotSpecs(botId);
  };

  const botCards = (bots) => {
    return bots.map((bot, index) => {
      return (
        <article
          key={bot.id}
          className="botCard"
          // onClick={() => handleClick(bot.id)}
          onClick={() => handleBotSpecs(index)}
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
                  {health}
                  {bot.health}
                </li>
                <li className="stat">
                  {attack}
                  {bot.damage}
                </li>
                <li className="stat">
                  {shield}
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
