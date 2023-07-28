import React from "react";
import "./YourBotCollection.css";
// import { GiTemplarShield, GiCrossedSwords } from "react-icons/gi";
// import { BsHeartPulseFill } from "react-icons/bs";

function YourBotCollection({ enlisted, shield, attack, health }) {
  const yourBots = (enlisted) => {
    return enlisted.map((bot) => {
      return (
        <article
          key={bot.id}
          className="botCard"
          //   onClick={() => handleEnlist(bot.id)}
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

  return (
    <div className="yourBots">
      <h1>YourBotCollection</h1>
      {/* {yourBots(enlisted)} */}
      {enlisted.map((bot) => {
        return (
          <article
            key={bot.id}
            className="botCard"
            //   onClick={() => handleEnlist(bot.id)}
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
      })}
    </div>
  );
}

export default YourBotCollection;
