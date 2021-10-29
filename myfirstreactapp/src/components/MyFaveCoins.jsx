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
   <ul>
     <li>
       Are in: {friend.username}
     </li>
   </ul>
    </>);
  });
  
 
    return (
        <>
          
        <li>{name}</li> 
        <li>{symbol}</li>
        <li>{api_coin_id}</li>
        <img src={image_url} id={id}/>
        <button onClick={coinClick}>Who's In?</button>
        {toggleFriendsAreIn ? friendsIn : null}
        </>
    
  );
};
export default MyFaveCoins;
