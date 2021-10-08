import React from "react";
import {Link} from 'react-router-dom'

const Header = ({handleDarkMode}) => {
  return (
    <div>
      <h1 className="text-center.text-warning.mt-3.mb-4">Token-Terminal</h1>
      <Link to='/coins'>Home </Link>
      <Link to='/favorites'>Favorites </Link>
      <label>
        Dark Mode 
        <input onChange={handleDarkMode} type="checkbox" id="dark-mode" name="dark-mode" value="dark-mode"></input>
      </label>
    </div>
  );
};
export default Header;
