import React, { PureComponent } from "react";
import Sidebar from "../components/Sidebar";
import FriendSearchBar from "../components/FriendSearchBar";
import FriendsCoin from "../components/FriendsCoin";

// grabs favorite coin data from friend list

function FriendsFavorites() {
  return (
    <div>
      <Sidebar />
      <FriendSearchBar />
      <FriendsCoin />
    </div>
  );
}

export default FriendsFavorites;
