import React from "react";

export default function Coin({ coin }) {
  console.log(coin);
  return (
    <li>
      <img className="coinlist-image" src={coin.image} alt="" />
      <span>{coin.current_price}</span>
      <span>{coin.price_change_percentage_24h}</span>
    </li>
  );
}
