import React from "react";
import axios from "axios"
import { useState } from "react";
import LogInPage from "./LogInPage";

export default function Post() {
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")
  const [image, setimage] = useState("")
  const [specialistName, setSpecialistName] = useState("")
  

  let myData = {
    title: title,
    text: text,
    image: image,
    specialist:{specialistName:specialistName}
  }

  function post() {
  
    console.log("in ")
    console.log(myData)
    axios({
      method: "post",
      url: "api/post/add",
      data:
        myData

    });
  }

  return (
    
    <div>
      <h2>Add Post:  </h2><br></br>
     title <input type="text" name="specialistName" onChange={(event) => { setTitle(event.target.value) }} /><br></br>
     Text <input type="text" name="Text" onChange={(event) => { setText(event.target.value) }} /><br></br>
      image<input type="text" name="image" onChange={(event) => { setimage(event.target.value) }} /><br></br>
      specialist Name <input type="text" name="specialistName" onChange={(event) => { setSpecialistName(event.target.value) }} /><br></br>
      <button onClick={post}>post</button>


    </div>
  );
}