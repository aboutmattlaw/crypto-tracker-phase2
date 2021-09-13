const BASE_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=500&page=1&sparkline=false";

fetch(BASE_URL)
  .then((resp) => {
    return resp.json();
  })

  .then(function (cryptoArray) {
    return console.log(cryptoArray);
  });
