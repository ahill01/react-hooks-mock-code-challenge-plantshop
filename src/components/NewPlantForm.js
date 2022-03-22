import React, {useState} from "react";

function NewPlantForm({setPlantsList, baseURL}) {
const [formData, setFormData] = useState({
  name:"",
  image:"",
  price:0.00
})

function handleChange(e){
const newData = e.target.value
const dataKey = e.target.name

setFormData({...formData, [dataKey]:newData})
// console.log(formData)
}

function handleSubmit(e){
//post
e.preventDefault()
const newPlant = JSON.stringify(formData)
console.log(newPlant)
const configObj = {
  method:"POST",
  headers:{"Content-Type": "application/json"},
  body:newPlant
}
fetch(baseURL,configObj)
.then(response=>response.json())
.then(plant => setPlantsList((plantsList)=>[...plantsList,plant]))

//update DOM

}

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" name="name" placeholder="Plant name" onChange={(e)=>handleChange(e)} value = {formData.name}/>
        <input type="text" name="image" placeholder="Image URL" onChange={(e)=>handleChange(e)} value = {formData.image}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={(e)=>handleChange(e)} value = {formData.price}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
