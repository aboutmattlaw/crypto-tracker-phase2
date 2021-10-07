import React from "react";
import Coin from "./Coin";

const FavoriteCoins = ({faveCoins}) => {
    console.log(faveCoins);
  return (
    <div>
      {faveCoins.map(coin => {
         return <Coin {...coin}/>
      })}
    </div>
  );
};
export default FavoriteCoins;