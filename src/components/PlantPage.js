import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plantsList}) {
  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList plantsList={plantsList}/>
    </main>
  );
}

export default PlantPage;
