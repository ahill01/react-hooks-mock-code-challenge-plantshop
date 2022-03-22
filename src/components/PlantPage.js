import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plantsList, setPlantsList,baseURL}) {
  return (
    <main>
      <NewPlantForm setPlantsList={setPlantsList} baseURL={baseURL}/>
      <Search plantsList={plantsList}/>
      <PlantList plantsList={plantsList}/>
    </main>
  );
}

export default PlantPage;
