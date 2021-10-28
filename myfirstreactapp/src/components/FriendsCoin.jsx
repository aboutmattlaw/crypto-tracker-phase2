import React from "react";
import Coin from "./Coin";




function FriendsCoin({myCoinList} , {friendList}) {


function listMap (data){
fetch(`http://localhost:9292/users`)
  .then((r) => r.json())
  .then((data) => listMap(data));
  
  const friendData = data.map((fri) => {
    return (
      <>     
    <li>{fri.username}</li> 
     </>);
  });
  }

    const myFaveCoins = myCoinList.map((myCoinList) => {
      return (
        <>
        
      <li>{myCoinList.name}</li> 
      <li>{myCoinList.symbol}</li>
      <li>{myCoinList.api_coin_id}</li>
      <img src={myCoinList.image_url}/>
      </>);
    });


   

  console.log(myCoinList)

  return (
    <>
    <h1>My Fave Coins</h1>
    <div>
      <div className="FriendCoinContainer">
        <div className="FriendCoin-Row">
          <ul className="FriendCoin">{myFaveCoins}</ul>
          <h1>Friend Coins</h1>
          <ul className="FriendCoin">placeholder</ul>
        </div>
      </div>
    </div>
    </>
  );
}

export default FriendsCoin;

