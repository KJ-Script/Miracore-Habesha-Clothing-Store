import React, { useState } from 'react'
import axios from 'axios';

function Men() {
  const formData = new FormData()
  const [description, setDescription] = useState()
  const [category, setCategory] = useState()
  const [img, setImg] = useState()

  formData.append("description", description)
  formData.append("category", category)
  formData.append("img", img)
  console.log('Images --- ', img)
  const submitForm = () => {
    axios
    .post("http://localhost:8080/createmen", formData)
    .then((response) => {
      console.log("Response: ", response.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <div className="flex flex-col space-y-3 w-full">
          <input type="text" placeholder="description" className="p-3 border-gray-800 border" onChange={(e) => {setDescription(e.target.value)}}/>
          <input type="text" placeholder="category" className="p-3 border-gray-800 border" onChange={(e) => {setCategory(e.target.value)}}/>
          <p>Enter image URL Below</p>
          <input type="file" className="p-3 border-gray-800 border" onChange={(e) => {setImg(e.target.files[0])}}/>
          <input type="file" placeholder="image 2" className="p-3 border-gray-800 border"/>
          <input type="file" placeholder="image 3" className="p-3 border-gray-800 border"/>

          <button className="bg-gray-800 p-3 text-white" onClick={() => {submitForm()}}>Submit</button>


        </div>
  )
}

export default Men