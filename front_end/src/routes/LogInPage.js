import React from "react";
import axios from "axios"
import { useState,useEffect} from "react";
import { event } from "jquery";

export default function LogInPage() {
    const [myUsername, setmyUsername] = useState("")
    const [mypassword, setmypassword] = useState("")
    const [check, setCheck] = useState("")
   let myData={userName:myUsername, passWord:mypassword}
  //cd  console.log(myData)
    useEffect(()=>{
        axios.get("api/user")
         .then(response=>{
           console.log(response.data)
           setmyUsername(response.data[0] )
           setmypassword(response.data[0] )
        })
        return()=>{}
      },[])
    
    
     function SignUp(){
       axios({
         method:"post",
         url:"api/user/add",
         data:
          myData
         
       }).then(response=>{setCheck(response.data )})}

     
     function deleteUser(){
       console.log("inside deleteHandler")
       axios.delete("delete/manal")
             .then(() => setmyUsername("Delete successful"));
       }
    return (
      
    
        
         
          
        
        
          
            <div>
        
                   
              <h2>log in:  </h2><br></br>
            userName <input type="text" name="userName"  onChange={(event) => { setmyUsername(event.target.value) }} /><br></br>
            password <input type="text" name ="password" onChange={(event) => { setmypassword(event.target.value) }}/><br></br>
            <h3>{check}</h3>
          
              
              <button onClick={SignUp}>Add</button>
              <button onClick={deleteUser}>delete</button>
              
            </div>
          );
    
    
  }