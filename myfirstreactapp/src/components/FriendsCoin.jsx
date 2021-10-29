import React, { useEffect, useState } from "react";
import Coin from "./Coin";
import MyFaveCoins from "./MyFaveCoins";


function FriendsCoin({myCoinList} , {friendList}) {
const [myFriendsIn, setMyFriendsIn] = useState([]);



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





// get '/coin/:id/users' do
// coins = Coin.find(params[:id]).users
// coins.to_json
// end






 

const myFaveCoins = myCoinList.map((coin) => {
  return (
    <>
    
<MyFaveCoins {...coin}/>

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
          <ul className="FriendCoin">{friendList}</ul>
        </div>
      </div>
    </div>
    </>
  );
}

export default FriendsCoin;

