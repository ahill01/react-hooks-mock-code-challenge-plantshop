import React,{useState} from "react";

function Search({plantsList}) {
const[searchTerm, setSearchTerm]=useState("")

function compareStrings(string1,string2){
  const str1 = toString(string1.toLowerCase)
  const str2 = toString(string2.toLowerCase)
  return str1.includes(str2)
}

function filterPlants(e){
    setSearchTerm(e.target.value)
    console.log(searchTerm)
const filteredList = plantsList.filter(plant => {
  return compareStrings(plant.name,searchTerm)})
  
console.log(filteredList)
}


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
