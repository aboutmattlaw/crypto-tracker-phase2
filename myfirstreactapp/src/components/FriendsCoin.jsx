import React from "react";
import Coin from "./Coin";






function FriendsCoin({myCoinList}) {


    const myFaveCoins = myCoinList.map((myCoinList) => {
      return (
        <>
      <li>{myCoinList.name}</li> 
      <li>{myCoinList.symbol}</li>
      <li>{myCoinList.api_coin.id}</li>
      <img src={myCoinList.image_url}/>
      </>);
    });


  console.log(myCoinList)

  return (
    <div>
      <div className="FriendCoinContainer">
        <div className="FriendCoin-Row">
          <ul className="FriendCoin">{myFaveCoins}</ul>
        </div>
      </div>
    </div>
  );
}

export default FriendsCoin;

