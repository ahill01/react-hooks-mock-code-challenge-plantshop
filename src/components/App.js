import React, {useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
const [plantsList, setPlantsList] = useState([])
const baseURL = "http://localhost:6001/plants"

useEffect(() => {
fetch(baseURL)
.then(response => response.json())
.then(plantsArr => {
  // console.log("plantsArr: "+plantsArr)
  setPlantsList(plantsArr)
  })
},[])

  return (
    <div className="app">
      <Header />
      <PlantPage plantsList={plantsList}/>
    </div>
  );
}

export default App;
