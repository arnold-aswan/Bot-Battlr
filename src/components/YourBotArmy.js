import React from "react";
import "./YourBotCollection.css";

function YourBotCollection({ enlisted, shield, attack, health, release }) {
  const handleDischarge = (botId) => {
    const notDischarged = enlisted.filter((bots) => bots.id !== botId);
    release(notDischarged);
  };

  const handlePermanentDicharge = (botId) => {
    try {
      fetch(`https://json-server-68la.onrender.com/bots${botId}`, {
        method: "DELETE",
      })
        .then((r) => r.json())
        .then((data) => data);
    } catch (error) {
      console.log("Error deleting bot: ".error);
    }
  };

  function yourBots(enlistedBots) {
    // initialize empty object
    const botsById = {};
    // filter based on bot id
    const botsByClass = {};
    const filteredBots = enlistedBots.filter((bot) => {
      // if bot id ! in botsById obj add it & return true

      if (!botsById[bot.id] && !botsByClass[bot.bot_class]) {
        botsById[bot.id] = true;
        botsByClass[bot.bot_class] = true;
        return true;
      } else {
        // else if bot id is already in botsById obj return false
        return false;
      }
      //  if (!botsByClass[bot.bot_class]) {
      //   botsByClass[bot.bot_class] = true;
      // } else {
      //   return false;
      // }
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
              <div className="discharge">
                <h3 className="botName">{bot.name}</h3>
                <button
                  className="btn-discharge"
                  onClick={() => handlePermanentDicharge(bot.id)}
                >
                  Discharge
                </button>
              </div>
              <p className="botCatchPhrase">{bot.catchphrase}</p>
              <p className="botClass">{bot.bot_class}</p>
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
