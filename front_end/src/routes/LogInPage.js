import React from "react";
import axios from "axios"
import { useState, useEffect } from "react";
import { Link,Outlet } from "react-router-dom";
import '../index.css'
import { Button } from "react-bootstrap";
import HomePage from "./HomePage";

export default function LogInPage(props) {
  const [userName, setmyUsername] = useState("")
  const [password, setmypassword] = useState("")
  const [roles, setRoles] = useState("")
  const [check, setCheck] = useState("")
  // const [check1, setCheck1] = useState("")
  const [message, setmessage] = useState("");
  let myData = { userName: userName, password: password, roles: "USER" }
  // const handleSubmit = (event) => {
  //   event.preventDefault();


  //   if ( check=="authenticatedUSER") {

  //     props.handleLogin()
  //   }
  //   else { setmessage("Your username or Passwrd is invalid. Please try again") }
  // }


  // useEffect(() => {
  //   axios.get("api/user")
  //     .then(response => {
  //       //console.log(response.data)
  //       setmyUsername(response.data)
  //       setmypassword(response.data)
  //     })
  //   return () => { }
  // }, [])



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
          //console.log("in")
          
          //sessionStorage.setItem("logIn","authenticatedADMIN");
          // setmyUsername(userName)
          // localStorage.setItem("username",userName);
          // props.handleLogin(response.data)
          localStorage.setItem("logIn", "authenticatedADMIN");
          window.open("HomePage","_self") 
        }
        else if(response.data == "authenticatedUSER"){ 
          // sessionStorage.setItem("logIn","authenticatedUSER");
          localStorage.setItem("logIn", "authenticatedUSER");
          window.open("HomePage","_self") 
        }
        // props.handleLogin(response.data)}
        else { setmessage("Your username or Passwrd is invalid. Please try again")
        // localStorage.setItem("logIn", "no one log in ");
      }
      })
    console.log(check)
  

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
      <h5>{check}{/* <Button name="button" onClick={deleteUser}>delete your account </Button> */}
     {message}</h5>
      </div>

);


} 

//       <div class="loginBox">
//             <h2>log in:  </h2><br></br> <th>
//         userName <input type="text" name="userName" onChange={(event) => { setmyUsername(event.target.value) }} /><br></br>
//         password <input type="text" name="password" onChange={(event) => { setmypassword(event.target.value) }} /><br></br>
//         <h3>{check}</h3></th>

//       <button onClick={Login}>Log in</button>
//       <button onClick={SignUp}>Sign Up</button>
//       <button onClick={deleteUser}>delete your account </button>
//       <h2>{message}</h2>
 
// </div>
  