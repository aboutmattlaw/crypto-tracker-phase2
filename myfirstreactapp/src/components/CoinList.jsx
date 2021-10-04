import React, { useState, useEffect } from "react";
import AddCoin from "./AddCoin";
import coinGecko from "../apis/coinGecko";
import axios from "axios";
import Coin from "../components/Coin";

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(coins);

  // const renderCoins = () => {
  //   <ul className="coinlist list-group mt-2">
  //     {coins.map((coin) => {
  //       <Coin key={coin.id} coin={coin} />;
  //     })}
  //   </ul>;
  //};
  return (
    <div>
      <ul className="coinlist list-group mt-2">
        {coins.map((coin) => {
          return <Coin key={coin.id} coin={coin} />;
        })}
      </ul>
    </div>
  );
};

export default CoinList;
