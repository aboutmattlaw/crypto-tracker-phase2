import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Chart from "../components/Chart";
import CoinData from "../components/CoinData";
import coinGecko from "../apis/coinGecko";

export default function CoinDetailPage() {
  const { id } = useParams();

  const [coinData, setCoinData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const resultsDay = await coinGecko.get(`/coins/${id}/market_chart/`, {
        params: {
          vs_currency: "usd",
          days: "1",
        },
      });
      const resultsWeek = await coinGecko.get(`/coins/${id}/market_chart/`, {
        params: {
          vs_currency: "usd",
          days: "7",
        },
      });
      const resultsYear = await coinGecko.get(`/coins/${id}/market_chart/`, {
        params: {
          vs_currency: "usd",
          days: "365",
        },
      });

      const coinDetailData = await coinGecko.get("/coins/markets/", {
        params: {
          vs_currency: "usd",
          ids: id,
        },
      });

      setCoinData({
        day: resultsDay.data.prices,
        week: resultsWeek.data.prices,
        year: resultsYear.data.prices,
        detail: coinDetailData.data[0],
      });
    };
    fetchData();
  }, []);

  // use useEffect to make a fetch request to a single coin using the usePArams info
  const renderData = () => {
    return (
      <div>
        <Chart />
        <CoinData />
      </div>
    );
  };
  return renderData();
}
