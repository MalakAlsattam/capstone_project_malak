import React from "react";
import axios from "axios"
import { useState, useEffect } from "react";



export default function LogInPage() {
  const [myUsername, setmyUsername] = useState("")
  const [mypassword, setmypassword] = useState("")
  const [check, setCheck] = useState("")
  let myData = { userName: myUsername, passWord: mypassword }
  
  useEffect(() => {
    axios.get("api/user")
      .then(response => {
        //console.log(response.data)
        setmyUsername(response.data)
        setmypassword(response.data)
      })
    return () => { }
  }, [])


  function SignUp() {
    axios({
      method: "post",
      url: "api/user/add",
      data:
        myData

    }).then(response => { setCheck(response.data) })
  }

  function SignIn() {
    axios({
      method: "post",
      url: "api/user/add",
      data:
        myData

    }).then(response => { setCheck(response.data) })
  }
  function deleteUser() {
    console.log("inside deleteHandler")
    console.log(myUsername)

    axios.delete(`api/user/delete/${myUsername}`)
      .then(() => setmyUsername("Delete successful"));
  }

  return (


    <div>


      <h2>log in:  </h2><br></br>
      userName <input type="text" name="userName" onChange={(event) => { setmyUsername(event.target.value) }} /><br></br>
      password <input type="text" name="password" onChange={(event) => { setmypassword(event.target.value) }} /><br></br>
      <h3>{check}</h3>

      <button onClick={SignIn}>Sign In</button>
      <button onClick={SignUp}>Sign Up</button>
      <button onClick={deleteUser}>delete your account </button>

    </div>
  );


}