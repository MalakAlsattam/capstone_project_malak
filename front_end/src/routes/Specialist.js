import React from "react";
import axios from "axios"
import { useState,useEffect} from "react";

export default function Specialist() {
    const [specialistName, setSpecialistName] = useState("")
    const [mypassword, setmypassword] = useState("")
    useEffect(()=>{
        axios.get("api/message")
         .then(response=>{
           console.log(response.data)
           setSpecialistName(response.data[0] )
           setmypassword(response.data)
        })
        return()=>{}
      },[])
    return (
     <div>Specialist
<h3>{JSON.stringify(specialistName) }</h3>
</div>
    );
  }