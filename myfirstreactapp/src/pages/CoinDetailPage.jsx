import React from "react";
import { useParams } from "react-router-dom";

export default function CoinDetailPage() {
  const x = useParams();
  console.log(x);

  // use useEffect to make a fetch request to a single coin using the usePArams info
  return <div>COIN DETAIL PAGE</div>;
}
