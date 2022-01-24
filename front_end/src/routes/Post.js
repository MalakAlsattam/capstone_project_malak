import React from "react";
import axios from "axios"
import { useState } from "react";
import '../CSS/Post.css'
import swal from "sweetalert"
import { useNavigate } from 'react-router-dom';

export default function Post() {
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")
  const [image, setimage] = useState("")
  const [specialistName, setSpecialistName] = useState("")
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();

  //make object for  post data
  let myData = {
    title: title,
    text: text,
    image: image,
    specialist: { specialistName: specialistName }
  }
  let login = localStorage.getItem("logIn");

  //this function for add new post

  function post() {

    if (login == "authenticatedADMIN") {
      console.log("in ")
      console.log(myData)
      axios({
        method: "post",
        url: "https://help-hope-backend.herokuapp.com/api/post/add",
        data:
          myData

      });
      //after post  data will go to  AllPost page 
      navigate("/AllPost")
    }
    else { swal("THE POST JUST FOR ADMIN !!") }
  }

  return (

    <div class="PostBox" >
      <h2>Add Post for just ADMIN: </h2><br></br>

      {/* the form just for Admin */}

      {login == "authenticatedADMIN" && <div>


        <h5>
          <form>
            title <input type="text" name="specialistName" onChange={(event) => { setTitle(event.target.value) }} /><br></br>
            Text <input type="text" name="Text" onChange={(event) => { setText(event.target.value) }} /><br></br>
            image<input type="text" name="image" onChange={(event) => { setimage(event.target.value) }} /><br></br>
            specialist Name <input type="text" name="specialistName" onChange={(event) => { setSpecialistName(event.target.value) }} /><br></br>
            <h2> <button type="submit" class="btn btn-outline-dark" onClick={post}>post</button></h2>
          </form> </h5>
      </div>
      }


    </div>
  );
}