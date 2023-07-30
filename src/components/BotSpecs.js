import React from "react";
import "./BotSpecs.css";

function BotSpecs({
  bot,
  shield,
  attack,
  health,
  setSelectedBotIndex,
  enlistBot,
}) {
  const handleBack = () => {
    setSelectedBotIndex(null);
  };

  const handleEnlist = (botId) => {
    console.log(botId);
    enlistBot(botId);
  };
  return (
    <article className="wrapper">
      <article className="bot" key={bot.id}>
        <figure className="pfp">
          <img src={bot.avatar_url} alt="bot" className="pfpimg" />
        </figure>
        <article className="botSpecs">
          <h2>Name: {bot.name}</h2>
          <h3>CatchPhrase: {bot.catchphrase}</h3>
          <p>Class: {bot.bot_class}</p>
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
          <div className="buttons">
            <button className="botSpec-btn" onClick={handleBack}>
              Go Back
            </button>
            <button
              className="botSpec-btn"
              onClick={() => handleEnlist(bot.id)}
            >
              Enlist
            </button>
          </div>
        </article>
      </article>
    </article>
  );
}

export default BotSpecs;
