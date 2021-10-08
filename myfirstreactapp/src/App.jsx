import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import CoinDetailPage from "./pages/CoinDetailPage";
import CoinIndexPage from "./pages/CoinIndexPage";
import FavoriteCoins from "./components/FavoriteCoins";

function App() {
  const [coins, setCoins] = useState([]);
  const [faveCoins, setFaveCoins] = useState([]);
  const [filtered, setFiltered] = useState("");
  const [darkMode, setDarkMode] = useState("not-dark-mode");

  function handleDelete(coinId) {
    const coinsMinusOne = faveCoins.filter(coin =>  coin.id !== coinId)
    setFaveCoins(coinsMinusOne)
  }

  function addToFavorites(coin){
    console.log('hello');
   const addedCoin = [...faveCoins, coin]
   setFaveCoins(addedCoin)
  }

  console.log('FAV', faveCoins);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => alert(error));
  }, []);

  function handleChange(e) {
    console.log(e);
    const searchedCoin = e.target.value;

    setFiltered(searchedCoin);
  }

  function filteredCoins() {
    const newSearchArray = coins.filter((coin) => {
      return coin.name.toLowerCase().includes(filtered.toLowerCase());
    });

    return newSearchArray;
  }

  function handleDarkMode() {
    console.log(" Dark Mode")
    if(darkMode === "not-dark-mode") {
      setDarkMode("dark-mode")
    }else {
      setDarkMode("not-dark-mode")
    }
  }

  return (
    <div className={darkMode}>
      <Header handleDarkMode={handleDarkMode}/>
      <Switch>
        <Route exact path="/">
          <CoinIndexPage
            handleChange={handleChange}
            filteredCoinsArray={filteredCoins()}
            addToFavorites={addToFavorites}
            handleDelete={handleDelete}
            faveCoins={faveCoins}
          />
        </Route>
        <Route exact path="/coins/:id">
          <CoinDetailPage />
        </Route>
        <Route exact path="/favorites">
          <FavoriteCoins faveCoins={faveCoins} handleDelete={handleDelete}/>
        </Route>
      </Switch>
    </div>
  );
}
export default App; 
