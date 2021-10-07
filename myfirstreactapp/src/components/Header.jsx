import React from "react";
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <h1 className="text-center.text-warning.mt-3.mb-4">Token-Terminal</h1>
      <Link to='/favorites'>Favorites</Link>
      <Link to='/coins'>Home</Link>
    </div>
  );
};
export default Header;
