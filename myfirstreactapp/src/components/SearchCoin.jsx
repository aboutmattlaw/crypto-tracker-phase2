import React from "react";

function SearchCoin({ coins }) {
  function handleChange(e) {
    const searchValue = e.target.value;
  }

  return (
    <div className="coin-app">
      <div className="coin-search">
        <form>
          <input
            className="coin-input"
            type="text"
            onChange={handleChange}
            placeholder="Search"
          />
        </form>
      </div>
    </div>
  );
}

export default SearchCoin;
