import React, { PureComponent, useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import FriendSearchBar from "../components/FriendSearchBar";
import FriendsCoin from "../components/FriendsCoin";

// grabs favorite coin data from friend list

function FriendsFavorites() {
  const [friendList, setFriendList] = useState([]);
  const [notFriendList, setNotFriendList] = useState([]);
  const [myCoinList, setMyCoinList] = useState([]);


  useEffect(() => {
        const currentUserId = localStorage.user_id

    fetch(`http://localhost:9292/users/${currentUserId}/friends`)
      .then((r) => r.json())
      .then((data) => setFriendList(data));
  }, []);


  function handleRemoveFromNotList(user_id, user) {
   
    let list = notFriendList.filter(user => user.id !== parseInt(user_id))
    setNotFriendList(list)

    let new_array = [...friendList, user]
     setFriendList(new_array)
  }

  function handleAddToFrinedsList(user){
    console.log("hello");
    // let new_array = [...friendList, user]
    // debugger
    // setFriendList(new_array)
  }






  useEffect(() => {
    const currentUserId = localStorage.user_id

fetch(`http://localhost:9292/users/${currentUserId}/notfriends`)
  .then((r) => r.json())
  .then((data) => setNotFriendList(data));
}, []);




  

  useEffect(() => {
    const currentUserId = localStorage.user_id

  fetch(`http://localhost:9292/users/${currentUserId}/favorites`)
  .then((r) => r.json())
  .then((data) => setMyCoinList(data));
}, []);




  console.log(friendList);
  console.log(notFriendList);
  console.log(myCoinList);




    // fetch(`http://localhost:9292/users/${currentUserId}


  // useEffect(() => {
  //   axios.get("http://localhost:9292/users").then((res) => {
  //     setFriendList(res.data);
  //     console.log(res.data);
  //   });
  // }, []);

  return (
    <div>
      <Sidebar friendList={friendList} notFriendList={notFriendList} handleAddToFrinedsList={handleAddToFrinedsList} handleRemoveFromNotList={handleRemoveFromNotList}/>
      <FriendSearchBar />
      <FriendsCoin myCoinList={myCoinList} friendList={friendList}/>
    </div>
  );
}

export default FriendsFavorites;
