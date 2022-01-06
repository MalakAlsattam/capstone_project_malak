import React from "react";
import axios from "axios"
import { useState, useEffect } from "react";
import { Link,Outlet } from "react-router-dom";


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
         {/* <nav class="navbar navbar-dark bg-dark">

      
<Link class="text-muted" to="/LogInPage" >
<svg xmlns="http://www.w3.org/2000/svg"
 width="16" height="16" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 16 16">
<path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
<path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
</svg> </Link> |{" "}

<Link class="text-muted" to="/HomePage"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
</svg></Link>|{" "}
<Link class="text-muted" to="/Chats">Chats</Link>|{" "}
<Link class="text-muted" to="/Specialist">Specialist</Link>|{" "}
<Link class="text-muted" to="/AllSpecialistAdmin">AllSpecialist</Link>|{" "}
<Link class="text-muted" to="/Post">Post</Link>|{" "}
<Link class="text-muted" to="/AllPost">AllPost</Link>|{" "}
<Link class="text-muted" to="/PersonalExperience"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
</svg></Link>|{" "}
<Link class="text-muted" to="/AllPersonalExperience">AllPersonalExperience</Link>|{" "}

</nav> */}
<Outlet />
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