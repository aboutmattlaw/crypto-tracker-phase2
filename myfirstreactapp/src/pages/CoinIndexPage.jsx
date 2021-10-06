import React from "react";
import Coin from "../components/Coin";

const CoinIndexPage = ({ handleChange, filteredCoinsArray }) => {
  return (
    <>
      <div className="coin-search">
        <form>
          <input
            className="coin-input"
            type="text"
            onChange={handleChange}
            placeholder="Search"
          />
        </form>
      </div>

      {filteredCoinsArray.map((coin) => {
        return (
          <Coin
            id={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            volume={coin.total_volume}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </>
  );
};
export default CoinIndexPage;
