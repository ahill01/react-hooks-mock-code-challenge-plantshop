import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantsList}) {
  // function buildCards(){
  //   plantsList.map((plant) => {return <PlantCard key={plant.id} plant={plant}/>})
  // }
  return (
    <ul className="cards">{plantsList.map((plant) => {return <PlantCard key={plant.id} plant={plant}/>})}</ul>
  );
}

export default PlantList;
