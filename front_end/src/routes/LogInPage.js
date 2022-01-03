import React from "react";
import axios from "axios"
import { useState, useEffect } from "react";
import { handleLogin } from "../App";


export default function LogInPage(props) {
  const [userName, setmyUsername] = useState("")
  const [password, setmypassword] = useState("")
  const [roles, setRoles] = useState("")
  const [check, setCheck] = useState("")
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
        if (response.data == "authenticatedUSER"||response.data == "authenticatedADMIN") {
          //console.log("in")
           props.handleLogin(response.data)
        }
        else { setmessage("Your username or Passwrd is invalid. Please try again") }
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


    <div>
      {/* <form onSubmit={handleSubmit}> <p >  UserName </p>
        <input name="username" type="text" placeholder="Enter your UserName" onChange={(event) => { setmyUsername(event.target.value) }} ></input>
        <p>  password </p>
        <input name="password" type="text" placeholder="Enter your password" onChange={(event) => { setmypassword(event.target.value) }} ></input>
        <p>
          <button name="submit" type="submit">Sign in</button></p>
        <p>{message}</p>
      </form> */}

      <h2>log in:  </h2><br></br> <th>
        userName <input type="text" name="userName" onChange={(event) => { setmyUsername(event.target.value) }} /><br></br>
        password <input type="text" name="password" onChange={(event) => { setmypassword(event.target.value) }} /><br></br>
        <h3>{check}</h3></th>

      <button onClick={Login}>Log in</button>
      <button onClick={SignUp}>Sign Up</button>
      <button onClick={deleteUser}>delete your account </button>
      <h2>{message}</h2>
    </div>
  );


}