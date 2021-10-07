import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Chart from "../components/Chart";
import CoinData from "../components/CoinData";
import coinGecko from "../apis/coinGecko";

export default function CoinDetailPage() {
  const { id } = useParams();

  const [coinData, setCoinData] = useState({});
  // const [timeframe, setTimeframe] = useState("year");

  const formatData = (data) => {
    // create new array of just 12 months

    const objtoArray = Object.keys(data);
    console.log("obj to array here", objtoArray);

    return data.map((el) => {
      // debugger;
      return {
        t: new Date(el[0]).toLocaleDateString("en-US", { month: "long" }),
        // t: new Date(el[0]).toLocaleDateString(),
        y: parseInt(el[1].toFixed(2)),
      };
    });
  };

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
        day: formatData(resultsDay.data.prices),
        week: formatData(resultsWeek.data.prices),
        year: formatData(resultsYear.data.prices),
        detail: coinDetailData.data[0],
      });
    };
    fetchData();
  }, []);

  // use useEffect to make a fetch request to a single coin using the usePArams info
  const renderData = () => {
    return (
      <div className="chart-container">
        <Chart data={coinData.year} detail={coinData.detail} />
        <CoinData />
      </div>
    );
  };
  return renderData();
}
