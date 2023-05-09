import React, { useState } from "react";
import axios from "axios";

function Miscellaneous() {
  
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
  console.log(category)

  const submitForm = () => {
    axios
      .post("http://localhost:8080/createmiscellaneous", {
        description,
        category,
      })
      .then((response) => {
        console.log("Response: ", response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex flex-col space-y-3 w-full">
      <input
        type="text"
        placeholder="description"
        className="p-3 border-gray-800 border"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="category"
        className="p-3 border-gray-800 border"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />
      <p>Enter image URL Below</p>
      <input
        type="text"
        placeholder="image 1"
        className="p-3 border-gray-800 border"
      />
      <input
        type="text"
        placeholder="image 2"
        className="p-3 border-gray-800 border"
      />
      <input
        type="text"
        placeholder="image 3"
        className="p-3 border-gray-800 border"
      />

      <button
        className="bg-gray-800 p-3 text-white"
        onClick={() => {
          submitForm();
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default Miscellaneous;
