import React from "react";
import axios from "axios"
import { useState } from "react";


export default function PersonalExperience() {
  
  const [text, setText] = useState("")
  const [image, setimage] = useState("")
  const [userName, setuserName] = useState("")
  const [id, setId] = useState("")

  let myData = {
    id:id,
    text: text,
    image: image,
    user:{userName:userName}
  }

  function post() {
  
    console.log("in ")
    console.log(myData)
    axios({
      method: "post",
      url: "api/personalExperience/add",
      data:
        myData

    });
  }

  return (

    <div>
      <h2>Add Post:  </h2><br></br>
      Id <input type="text" name="id" onChange={(event) => { setId(event.target.value) }} /><br></br>
     Text <input type="text" name="Text" onChange={(event) => { setText(event.target.value) }} /><br></br>
      image<input type="text" name="image" onChange={(event) => { setimage(event.target.value) }} /><br></br>
      user Name <input type="text" name="userName" onChange={(event) => { setuserName(event.target.value) }} /><br></br>
      <button onClick={post}>post</button>


    </div>
  );}