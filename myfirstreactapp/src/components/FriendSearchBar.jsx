import React, { useState } from "react";
import "../SideBar.css";

function FriendSearchBar() {
  const [friendSearch, setFriendSearch] = useState("");

  function handleFriendInput(e) {
    console.log(e);
    setFriendSearch(e.target.value);
  }
  return (
    <div>
      <input
        className="friend-input"
        type="text"
        onChange={handleFriendInput}
        placeholder="Search Friend"
      />
      <input type="submit" value="Find Friend" />
    </div>
  );
}

export default FriendSearchBar;
