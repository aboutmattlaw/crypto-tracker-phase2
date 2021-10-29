import React, { useState } from "react";
import { Link } from "react-router-dom";

const MyFaveCoins = ({name, symbol, api_coin_id, image_url, id}) => {
const [toggleFriendsAreIn, setToggleFriendsAreIn] = useState(false)
const [myFriendsIn, setMyFriendsIn] = useState([]);


function coinClick (e){

    
    if (toggleFriendsAreIn) {
        setToggleFriendsAreIn( value => !value)
    }else {
        setToggleFriendsAreIn( value => !value)

        fetch(`http://localhost:9292/coin/${id}/users`)
        .then((r) => r.json())
        .then((data) => setMyFriendsIn(data));
    }
  }
  
  console.log(myFriendsIn)
  
  const friendsIn = myFriendsIn.map((friend) => {
  
    return (
      <>
   
     <li>
       <h4>{friend.username} is in!</h4>
     </li>
    </>);
  });
  

 
    return (
        <>
     <div>
        <li><h2>{name}</h2></li> 
        <li><h3>{symbol}</h3></li>
        <li>{api_coin_id}</li>
        <img src={image_url} id={id}/>
        <li><button onClick={coinClick}>Who's In?</button></li>
        {toggleFriendsAreIn ? friendsIn : null}
        <li>-----------</li>
        </div>
        </>
    
  );
};
export default MyFaveCoins;
