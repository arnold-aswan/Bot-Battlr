import React from "react";
import "./YourBotCollection.css";

function YourBotCollection({ enlisted, shield, attack, health }) {
  console.log(enlisted);

  function yourBots(enlistedBots) {
    return enlistedBots.map((bot) => {
      return (
        <article
          key={bot[0].id}
          className="botCard"
          //   onClick={() => handleEnlist(bot.id)}
        >
          <div className="botAvatar">
            <img src={bot[0].avatar_url} alt="bot_image" />
          </div>
          <div className="botBody">
            <div className="botInfo">
              <h3 className="botName">{bot[0].name}</h3>
              <p className="botCatchPhrase">{bot[0].catchphrase}</p>
            </div>
            <div className="botStats">
              <ul className="stats">
                <li className="stat">
                  {health}
                  {bot[0].health}
                </li>
                <li className="stat">
                  {attack}
                  {bot[0].damage}
                </li>
                <li className="stat">
                  {shield}
                  {bot[0].armor}
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
