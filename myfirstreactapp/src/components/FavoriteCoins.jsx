import React from "react";
import Coin from "./Coin";

const FavoriteCoins = ({faveCoins, handleDelete, }) => {
    console.log(faveCoins);
  return (
    <div>
      {faveCoins.map(coin => {
         return <Coin key={coin.id} {...coin} handleDelete={handleDelete} faveCoins={faveCoins}/>
      })}
    </div>
  );
};
export default FavoriteCoins;