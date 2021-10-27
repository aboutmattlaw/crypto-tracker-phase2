import React from "react";
import "../SideBar.css";

function Sidebar({ friendList }) {
  const menuItems = friendList.map((friendList) => {
    return <li>{friendList.username}</li>;
  });

  return (
    <div className="Sidebar">
      <ul className="SidebarFriendList">{menuItems}</ul>
    </div>
  );
}

export default Sidebar;
