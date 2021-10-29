import React from "react";
import "../SideBar.css";

function Sidebar({ friendList, notFriendList, handleAddToFrinedsList, handleRemoveFromNotList }) {


function addFriendClick (e){
  console.log(e.target.id)


const currentUserId = localStorage.user_id

const newFriendship = {
    friender_id: currentUserId,
    friendee_id: e.target.id,
  };
  const configObj = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newFriendship),
  };


  fetch(`http://localhost:9292/friendships`, configObj)
    .then((resp) => resp.json())
    .then((user) => {
      // delete from not freinds list in state
      handleRemoveFromNotList(newFriendship.friendee_id, user)
      // add to freinds list in state
      // handleAddToFrinedsList(user)
    })
}
  

  
  const notFriends = notFriendList.map((friendList) => {
    return (
      <>
    <li id={friendList.id} onClick={addFriendClick}>{friendList.username}</li> 
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
      <h4>People I've Followed</h4>
      <ul className="SidebarFriendList">{menuItems}</ul>
      <h4>Haven't Followed Yet</h4>
      <ul className="SidebarFriendList">{notFriends}</ul>
    </div>
  );
}

export default Sidebar;
