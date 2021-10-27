import React, { PureComponent, useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import FriendSearchBar from "../components/FriendSearchBar";
import FriendsCoin from "../components/FriendsCoin";

// grabs favorite coin data from friend list

function FriendsFavorites() {
  const [friendList, setFriendList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((r) => r.json())
      .then((data) => setFriendList(data));
  }, []);

  console.log(friendList);

  // useEffect(() => {
  //   axios.get("http://localhost:9292/users").then((res) => {
  //     setFriendList(res.data);
  //     console.log(res.data);
  //   });
  // }, []);

  return (
    <div>
      <Sidebar friendList={friendList} />
      <FriendSearchBar />
      <FriendsCoin />
    </div>
  );
}

export default FriendsFavorites;
