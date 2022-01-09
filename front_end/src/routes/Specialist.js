import React from "react";
import axios from "axios"
import { useState } from "react";
import '../index.css'


export default function Specialist() {
  const [specialistName, setSpecialistName] = useState("")
  const [email, setEmail] = useState("")
  const [image, setimage] = useState("")
  const [phone, setphone] = useState("")
  const [moreInfo, setmoreInfo] = useState("")

  let myData = {
    specialistName: specialistName,
    email: email,
    image: image,
    phone: phone,
    moreInfo: moreInfo
  }
  axios({
    method:'post',
    url:'api/specialist/add',
   
    config: { headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
   })

  function post() {
    let m=sessionStorage.getItem("logIn")
 
    // console.log("in ")
    // console.log(myData)
    if (m=="authenticatedADMIN"){
    axios({
      method: "post",
      url: "api/specialist/add",
      data:
        myData

    });
  }
else {alert("Your not ADMIN")}}

  return (

    <div class="PostBox">
      <h2>Specialist Rigister:  </h2><br></br>
      <h5>
      specialist Name <input type="text" name="specialistName" onChange={(event) => { setSpecialistName(event.target.value) }} /><br></br>
      Email <input type="text" name="email" onChange={(event) => { setEmail(event.target.value) }} /><br></br>
      image<input type="text" name="image" onChange={(event) => { setimage(event.target.value) }} /><br></br>
      phone <input type="text" name="phone" onChange={(event) => { setphone(event.target.value) }} /><br></br>
      moreInfo <input type="text" name="morinfo" onChange={(event) => { setmoreInfo(event.target.value) }} /><br></br>
      </h5> 
      <h2><button type="button" class="btn btn-outline-dark"  onClick={post}>registration</button></h2>
      

    </div>
  );
}