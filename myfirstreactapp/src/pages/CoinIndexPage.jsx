import React, { useState } from "react";
import Coin from "../components/Coin";
import Sidebar from "../components/Sidebar";

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
  const [userNameLogin, setUserNameLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");


  

  function newUser(e) {
    e.preventDefault()
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


    fetch(`http://localhost:9292/users`, configObj)
      .then((resp) => resp.json())
      .then((newUser) => {
        console.log(newUser)
      localStorage.setItem("user_id",newUser.id)
      });
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





  
  function handleLoginNameInput(e) {
    console.log(e);
    setUserNameLogin(e.target.value);
  }

  function handleLoginPasswordInput(e) {
    console.log(e);
    setPasswordLogin(e.target.value);
  }





  function handleLogOut (e) {
    console.log(e)
    localStorage.clear();
 }



function handleBecomeOne (e) {
  console.log(e)
  localStorage.setItem("user_id", "1");
  }


  function userLogin(e) {
    e.preventDefault()
    const userLogin = {
      username: userNameLogin,
      password: passwordLogin,
    };
    const configObj = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLogin),
    };


    fetch(`http://localhost:9292/users/login`, configObj)
      .then((resp) => resp.json())
      .then((newUser) => {
        console.log(newUser)
      localStorage.setItem("user_id",newUser.id)
      });
  }




  return (
    <>
      <input
        className="coin-input"
        type="text"
        onChange={handleChange}
        placeholder="Search Tokens"
      />

      <div className="coin-search">
        <form onSubmit={newUser}>
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


{/* 

<form onSubmit={userLogin}>
          <input
            className="coin-input"
            name="userName"
            type="text"
            onChange={handleLoginNameInput}
            value={userNameLogin}
            placeholder="Username"
          />

          <input
            className="coin-input"
            name="password"
            type="text"
            onChange={handleLoginPasswordInput}
            value={passwordLogin}
            placeholder="Password"
          />
          <input type="submit" value="Log In" />
        </form> */}


        <button onClick={handleLogOut}>Logout</button>
<button onClick={handleBecomeOne}>Become One</button>


      </div>

      {filteredCoinsArray.map((coin) => {
        return (
          <Coin
            key={coin.id}
            id={coin.id}
            name={coin.name}
            // price={coin.current_price}
            symbol={coin.symbol}
            // marketcap={coin.market_cap}
            // volume={coin.total_volume}
            image={coin.image_url}
            // // priceChange={coin.price_change_percentage_24h}
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
