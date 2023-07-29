import React from "react";
import "./YourBotCollection.css";

function YourBotCollection({ enlisted, shield, attack, health, discharge }) {
  const handleDischarge = (botId) => {
    const notDischarged = enlisted.filter((bots) => bots.id !== botId);
    discharge(notDischarged);
  };

  function yourBots(enlistedBots) {
    // initialize empty object
    const botsById = {};
    // filter based on bot id
    const filteredBots = enlistedBots.filter((bot) => {
      // if bot id ! in botsById obj add it & return true
      if (!botsById[bot.id]) {
        botsById[bot.id] = true;
        return true;
      } else {
        // else if bot id is already in botsById obj return false
        return false;
      }
    });
    // map with the filtered obj
    return filteredBots.map((bot) => {
      return (
        <article
          key={bot.id}
          className="botCard"
          onClick={() => handleDischarge(bot.id)}
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
  }

  return <div className="yourBots">{yourBots(enlisted)}</div>;
}

export default YourBotCollection;
