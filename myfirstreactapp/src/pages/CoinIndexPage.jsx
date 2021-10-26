import React, { useState } from "react";
import Coin from "../components/Coin";

const CoinIndexPage = ({
  handleChange,
  filteredCoinsArray,
  addToFavorites,
  handleDelete,
  faveCoins,
}) => {
  // sign up

  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function newUser() {
    const newUser = {
      email,
      username: userName,
      password,
    };
    const configObj = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    };

    debugger;

    // fetch(url, configObj)
  }

  function handleUserNameInput(e) {
    console.log(e);
    setUserName(e.target.value);
  }
  function handleEmailInput(e) {
    console.log(e);
    setEmail(e.target.value);
  }
  function handlePasswordInput(e) {
    console.log(e);
    setPassword(e.target.value);
  }

  return (
    <>
      <div className="coin-search">
        <form onSubmit={newUser}>
          <input
            className="coin-input"
            type="text"
            onChange={handleChange}
            placeholder="Search"
          />

          <input
            className="coin-input"
            name="userName"
            type="text"
            onChange={handleUserNameInput}
            value={userName}
            placeholder="Username"
          />

          <input
            className="coin-input"
            name="email"
            type="text"
            onChange={handleEmailInput}
            value={email}
            placeholder="Email"
          />

          <input
            className="coin-input"
            name="password"
            type="text"
            onChange={handlePasswordInput}
            value={password}
            placeholder="Password"
          />
          <input type="submit" value="Create User" />
        </form>
      </div>

      {filteredCoinsArray.map((coin) => {
        return (
          <Coin
            key={coin.id}
            id={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            volume={coin.total_volume}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
            addToFavorites={addToFavorites}
            handleDelete={handleDelete}
            faveCoins={faveCoins}
          />
        );
      })}
    </>
  );
};
export default CoinIndexPage;
