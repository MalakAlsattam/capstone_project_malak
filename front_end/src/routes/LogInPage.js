import React from "react";
import axios from "axios"
import { useState } from "react";
import '../CSS/LogIn.css'
import { useNavigate } from 'react-router-dom';

export default function LogInPage(props) {
  const [userName, setmyUsername] = useState("")
  const [password, setmypassword] = useState("")
  const [roles, setRoles] = useState("")
  const [check, setCheck] = useState("")
  const [message, setmessage] = useState("");
  let myData = { userName: userName, password: password, roles: "USER" }
  const navigate = useNavigate();

  



  function SignUp() {
    axios({
      method: "post",
      url: "api/user/add",
      data:
        myData

    }).then(response => { setCheck(response.data) })
  }

  function Login() {

    axios.get('api/user/login', { params: { userName: userName, password: password } })
      .then(response => {
        if (response.data == "authenticatedADMIN") {
          
          localStorage.setItem("username",userName);
          localStorage.setItem("logIn", "authenticatedADMIN");
          navigate("/HomePage") 
         
        }
        else if(response.data == "authenticatedUSER"){ 
          console.log("inside authenticated user  "+userName)
          localStorage.setItem("logIn", "authenticatedUSER");
          localStorage.setItem("username",userName);
          navigate("/HomePage") 
        }
        else { setmessage("Your username or Passwrd is invalid. Please try again")
        
     }
      let username= localStorage.getItem("username")
    console.log(username)
      }
      )
  
  }
 
  function deleteUser() {
    console.log("inside deleteHandler")
    console.log(userName)
   
    axios.delete(`api/user/delete/${userName}`)
      .then(() => setmyUsername("Delete successful"));
  }

  return (


    <div class="loginBox">
       <h2>log in:  </h2><br></br> <h5>
        user name <input type="userName" onChange={(event) => { setmyUsername(event.target.value) }} /><br></br>
        password <input type="password" onChange={(event) => { setmypassword(event.target.value) }} /><br></br>
       </h5>
       <h2>
        <button type="button" class="btn btn-outline-dark" onClick={Login}>Log in</button>
      <button  type="button" class="btn btn-outline-dark" onClick={SignUp}>Sign Up</button>
      </h2>
      <h5>{check}
      {/* <button type="button" onClick={deleteUser}>delete your account </button> */}
     {message}</h5>
      </div>

);


} 


  