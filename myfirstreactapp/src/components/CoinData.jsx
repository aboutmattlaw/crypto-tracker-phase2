import React from "react";

export default function CoinData({data}) {
  const renderCoinData = () => {
    if(data) {
      return (
        <div  className="bg-white mt-3 p-2 rounded border row">
          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">Market Cap</span>
              <pan>{data.market_cap}</pan>
            </div>
            <hr/>
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">
                Total Supply
              </span>
              <pan>{data.total_supply}</pan>
            </div>
          </div>
          
          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">Volume(24Hr)</span>
              <pan>{data.total_volume}</pan>
            </div>
            <hr/>
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">
                High 24h
              </span>
              <pan>{data.high_24h}</pan>
            </div>
          </div>
          
          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">Circulating Supply</span>
              <pan>{data.circulating_supply}</pan>
            </div>
            <hr/>
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">
                Low 24h
              </span>
              <span>{data.low_24h}</span>
            </div>
          </div>
        </div>
      );
    }
  };

  return <div>{renderCoinData()}</div>;
};
