import React from "react";

function Search({ term, setTerm }) {
  const handleChange = (e) => {
    setTerm(e.target.value);
  };
  return (
    <div className="search">
      <label>Search Products</label>
      <input type="text" onChange={handleChange} value={term} />
    </div>
  );
}

export default Search;
