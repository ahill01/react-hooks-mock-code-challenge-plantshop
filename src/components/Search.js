import React,{useState} from "react";

function Search({searchTerm, filterPlants}) {


  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e)=>filterPlants(e)}
        value = {searchTerm}/>
    </div>
  );
}

export default Search;
