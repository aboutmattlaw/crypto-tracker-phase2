import React from "react";

export default function Coin({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  coin,
}) {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="" />
          <h1>{name}</h1>
          <p>{symbol}</p>
        </div>
        <div className="coin-data">
          <p>{price}</p>
          <p>{volume}</p>
        </div>
      </div>
    </div>
  );
}
