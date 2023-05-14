import React, { useState } from "react";
import axios from "axios";

function Women() {
  const formData = new FormData();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
  const [img, setImg] = useState();
  const [img1, setImg1] = useState();
  const [img2, setImg2] = useState();

  formData.append("description", description);
  formData.append("category", category);
  formData.append("img", img);
  formData.append("img1", img1);
  formData.append("img2", img2);
  console.log("Category", category);

  const submitForm = () => {
    axios
      .post("http://localhost:8080/createwomen", formData)
      .then((response) => {
        console.log("Response: ", response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex flex-col space-y-3 w-full">
      <div className="flex flex-col space-y-3 w-full">
        <input
          type="text"
          placeholder="description"
          className="p-3 border-gray-800 border"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <select
          className="h-[50px] bg-slate-800 text-white px-5"
          onClick={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="footwear">footwear</option>
          <option value="hats">hats</option>
          <option value="top">top</option>
          <option value="bottom">bottom</option>
          <option value="additional">additional</option>
        </select>
        <p>Enter image URL Below</p>
        <input
          type="file"
          className="p-3 border-gray-800 border"
          onChange={(e) => {
            setImg(e.target.files[0]);
          }}
        />
        <input
          type="file"
          className="p-3 border-gray-800 border"
          onChange={(e) => {
            setImg1(e.target.files[0]);
          }}
        />
        <input
          type="file"
          className="p-3 border-gray-800 border"
          onChange={(e) => {
            setImg2(e.target.files[0]);
          }}
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
    </div>
  );
}

export default Women;
