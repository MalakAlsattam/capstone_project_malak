import React from "react";
import axios from "axios"
import { useState } from "react";
import LogInPage from "./LogInPage";
import '../index.css'


export default function PersonalExperience() {

  const [text, setText] = useState("")
  const [image, setimage] = useState("")
  const [userName, setuserName] = useState("")

  let myData = {
    text: text,
    image: image,
    user: { userName: userName }
  }

  function post() {
    let m = sessionStorage.getItem("logIn")
    console.log(m)
    if (m != "authenticatedADMIN" ) {
      console.log("in ")
      console.log(myData)
      alert("Log in first") 
    }
    else if ( m != "authenticatedUSER"){ 
      alert("Log in first") }
    else { 
      axios({
        method: "post",
        url: "api/personalExperience/add",
        data:
          myData

      });
     }
  }


  return (

    <div class="PostBox">
      <h2>Add Post:  </h2><br></br>
      <h5>
      Text <input type="text" name="Text" onChange={(event) => { setText(event.target.value) }} /><br></br>
      image<input type="text" name="image" onChange={(event) => { setimage(event.target.value) }} /><br></br>
      user Name <input type="text" name="userName" onChange={(event) => { setuserName(event.target.value) }} /><br></br>
      </h5>
     <h2><button  type="button" class="btn btn-outline-dark"  onClick={post}>post</button></h2> 


    </div>
  );
}