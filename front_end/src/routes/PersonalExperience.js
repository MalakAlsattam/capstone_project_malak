import React from "react";
import axios from "axios"
import { useState } from "react";
import '../CSS/Post.css'
import swal from "sweetalert"
import { useNavigate } from 'react-router-dom';
export default function PersonalExperience() {

  const [text, setText] = useState("")
  const [image, setimage] = useState("")
  const [userName, setuserName] = useState("")


  //make object for  PersonalExperience data
  let myData = {
    text: text,
    image: image,
    user: { userName: userName }
  }
  const navigate = useNavigate();
  let username = localStorage.getItem("username")
  console.log(username)

  //this function for add new PersonalExperience
  function post() {
    let login = localStorage.getItem("logIn");
    console.log(login)

    if (login == "authenticatedADMIN" && username == userName) {
      axios({
        method: "post",
        url: "https://help-hope-backend.herokuapp.com/api/personalExperience/add",
        data:
          myData

      });
      //after post  data will go to  AllPersonalExperience page 

      navigate("/AllPersonalExperience")
    }
    else if (login == "authenticatedUSER" && username == userName) {
      axios({
        method: "post",
        url: "https://help-hope-backend.herokuapp.com/api/personalExperience/add",
        data:
          myData

      });
      //after post  data will go to  AllPersonalExperience page 

      navigate("/AllPersonalExperience")
    }
    else {
      swal("Log in first please..")
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
      <h2><button type="button" class="btn btn-outline-dark" onClick={post}>post</button></h2>


    </div>
  );
}