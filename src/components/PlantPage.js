import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plantsList, setPlantsList,baseURL}) {

  const[searchTerm, setSearchTerm]=useState("")
  const [filteredList, setFilteredList] = useState(plantsList)
  function compareStrings(string1,string2){
    const str1 = toString(string1.toLowerCase())
    const str2 = toString(string2.toLowerCase())
    return str1.includes(str2)
  }

  function filterPlants(e){
      setSearchTerm(e.target.value)
      setFilteredList(plantsList.filter(plant => plant.name.toLowerCase().includes(searchTerm.toLowerCase())))
      };

  return (
    <main>
      <NewPlantForm setPlantsList={setPlantsList} baseURL={baseURL}/>
      <Search searchTerm = {searchTerm} setSearchTerm= {setSearchTerm} plantsList={plantsList} filterPlants = {filterPlants}/>
      <PlantList searchTerm = {searchTerm} plantsList={plantsList} filteredList={filteredList}/>
    </main>
  );
}

export default PlantPage;
