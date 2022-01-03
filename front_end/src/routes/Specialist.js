import React from "react";
import axios from "axios"
import { useState } from "react";


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
    console.log("in ")
    console.log(myData)
    axios({
      method: "post",
      url: "api/specialist/add",
      data:
        myData

    });
  }

  return (

    <div>
      <h2>Specialist log in:  </h2><br></br>
      specialist Name <input type="text" name="specialistName" onChange={(event) => { setSpecialistName(event.target.value) }} /><br></br>
      Email <input type="text" name="email" onChange={(event) => { setEmail(event.target.value) }} /><br></br>
      image<input type="text" name="image" onChange={(event) => { setimage(event.target.value) }} /><br></br>
      phone <input type="text" name="phone" onChange={(event) => { setphone(event.target.value) }} /><br></br>
      moreInfo <input type="text" name="morinfo" onChange={(event) => { setmoreInfo(event.target.value) }} /><br></br>
      <button onClick={post}>post</button>


    </div>
  );
}