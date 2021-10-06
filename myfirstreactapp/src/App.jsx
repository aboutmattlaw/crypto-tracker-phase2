import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import SearchCoin from "./components/SearchCoin";
import { Route, Switch } from "react-router-dom";
import CoinDetailPage from "./pages/CoinDetailPage";
import CoinIndexPage from "./pages/CoinIndexPage";

function App() {
  const [coins, setCoins] = useState([]);
  const [filtered, setFiltered] = useState("");

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
    const searchedCoin = e.target.value;

    setFiltered(searchedCoin);
  }

  function filteredCoins() {
    const newSearchArray = coins.filter((coin) => {
      return coin.name.toLowerCase().includes(filtered.toLowerCase());
    });

    return newSearchArray;
  }

  return (
    <div className="coin-app">
      {/* <Router> */}
      <Switch>
        <Route exact path="/coins">
          <CoinIndexPage
            handleChange={handleChange}
            filteredCoinsArray={filteredCoins()}
          />
        </Route>
        <Route exact path="/coins/:key">
          <CoinDetailPage />
        </Route>
      </Switch>
      {/* </Router> */}
    </div>
  );
}
export default App;
