import React from "react";
import "../SideBar.css";

function Sidebar({ friendList, notFriendList }) {




  
  
  const notFriends = notFriendList.map((friendList) => {
    return (
      <>
    <li>{friendList.username}</li> 
    </>
    )
  });


  const menuItems = friendList.map((friendList) => {
    return (
      <>
    <li>{friendList.username}</li> 
    </>
    )
  });

  return (
    <div className="Sidebar">
      <h4>My Friends</h4>
      <ul className="SidebarFriendList">{menuItems}</ul>
      <h4>Not Yet My Friends</h4>
      <ul className="SidebarFriendList">{notFriends}</ul>
    </div>
  );
}

export default Sidebar;
