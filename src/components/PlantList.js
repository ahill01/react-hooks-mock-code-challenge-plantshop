import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantsList,filteredList,filterPlants}){

  return (
    <ul className="cards">{filteredList.map((plant) => {return <PlantCard key={plant.id} plant={plant}/>})}</ul>
  );
}

export default PlantList;
