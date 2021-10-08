import React, { useState } from "react";
import "../Coin.css";
import { Link, BrowserRouter } from "react-router-dom";

export default function Coin({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  id,
  addToFavorites
}) {
  const [favorite, setFavorite] = useState(false);

  function handleFavorite() {
    const addCoin = {name, price, symbol, marketcap, volume, image, priceChange, id}
    addToFavorites(addCoin)
    setFavorite((favorite) => !favorite);
  }

  return (
    <>
      <div className="coin-container">
        <div className="coin-row">
          <div className="coin">
            <button
              className="coin-button"
              type="button"
              onClick={handleFavorite}
            >
              {favorite ? '✩' : '⭐' }
            </button>
            <img src={image} alt="" />
            <h1>{name}</h1>
            <Link to={`/coins/${id}`}>
              <p className="coin-symbol">{symbol}</p>
            </Link>
          </div>
          <div className="coin-data">
            <p className="coin-price">{price}</p>
            <p className="coin-volume">${volume.toLocaleString()}</p>

            {priceChange < 0 ? (
              <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
            ) : (
              <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
            )}
            <p className="coin-marketcap">
              Mkt Cap ${marketcap.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
