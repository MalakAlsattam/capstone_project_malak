import React from "react";
import axios from "axios"
import { useState } from "react";
import '../CSS/LogIn.css'
import { useNavigate } from 'react-router-dom';
import swal from "sweetalert"
import { Alert } from "bootstrap";
export default function LogInPage() {
  const [userName, setmyUsername] = useState()
  const [password, setmypassword] = useState()
  const [roles, setRoles] = useState("")
  const [check, setCheck] = useState("")
  const [message, setmessage] = useState("");
  let myData = { userName: userName, password: password, roles: "USER" }
  const navigate = useNavigate();




  //this function for register user 
  function SignUp(e) {
    e.preventDefault();
    if (userName == null) {
      swal("please fill out the userName field")
    }
    else if (password == null) {
      swal("please fill out the password field")
    }

    axios({
      method: "post",
      url: "https://help-hope-backend.herokuapp.com/api/user/add",
      data:
        myData

    }).then(response => { swal(response.data) })
    

  }

  //this function for login user 
  function Login() {
    axios.get('https://help-hope-backend.herokuapp.com/api/user/login', { params: { userName: userName, password: password } })
      .then(response => {
        if (response.data == "authenticatedADMIN") {

          localStorage.setItem("username", userName);
          localStorage.setItem("logIn", "authenticatedADMIN");
          navigate("/HomePage")

        }
        else if (response.data == "authenticatedUSER") {
          console.log("inside authenticated user  " + userName)
          localStorage.setItem("logIn", "authenticatedUSER");
          localStorage.setItem("username", userName);

          navigate("/HomePage")
        }
        else {
          swal("Your username or Passwrd is invalid. Please try again")

        }
        let username = localStorage.getItem("username")
        console.log(username)
      }
      )

  }

  //this function for delete user 
  function deleteUser() {
    console.log("inside deleteHandler")
    console.log(userName)

    axios.delete(`https://help-hope-backend.herokuapp.com/api/user/delete/${userName}`)
      .then(() => setmyUsername("Delete successful"));
  }

  return (
    <div>

      <div class="loginBox">

        <form >
          <h2>log in:  </h2><br></br>
          <h5>

            <label> user name</label>
            <input type="userName" onChange={(event) => { setmyUsername(event.target.value) }} /><br></br>
            <label>password</label>
            <input type="password" onChange={(event) => { setmypassword(event.target.value) }} /><br></br>
          </h5>
          <h2>
            <button type="button" class="btn btn-outline-dark" onClick={(e) => { Login(e) }}>Log in</button>
            <button type="submit" class="btn btn-outline-dark" onClick={(e) => { SignUp(e) }}>Sign Up</button>
          </h2>
          {/* <h5>
            {check}
            {message}
          </h5> */}
        </form>

      </div>
      <footer class="navbar navbar-dark bg-dark">
       
        <p > &copy; 2022 MALAK &nbsp;&nbsp;
          <a href="https://github.com/MalakAlsattam" class="text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg></a>
        </p>
      </footer>
    </div>
  );


}


