import React from "react";

const Search = props => {
  return (
    <div className="search">
      <div className="search_form">
        <input
          className="search_input"
          onChange={props.searchFilter}
          value={props.inputValue}
          type="search"
          placeholder="Search here..."
          name="search"
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default Search;
