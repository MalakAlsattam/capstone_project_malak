
// import React, { useEffect, useState } from 'react'
// import axios from "axios"
// import $ from 'jquery'
// export default function App() {
//   const [myUser, setmyUser] = useState({userName:"",password:""})
  

//  useEffect(()=>{
//    axios.get("api/user")
//     .then(response=>{
//       console.log(response.data)
//       setmyUser(response.data[0] )
   
//    })
//    return()=>{}
//  },[])
//  function updateuserName(event) {
//   setmyUser({
//     userName: event.target.value 
//   });
// }

// function updatepassword(event){
//   setmyUser({
//     password: event.target.value 
//   });
// }
// function addUser(){
//   axios({
//     method:"post",
//     url:"api/user/add",
//     data:{
//      userName :"maha",
//      passWord:"13849"
//     }
//   });
// }
// function save() {
//   var context = this;

//   $.ajax({
//     url: "api/user/add",
//     method: "POST",
//     data: {
   
//       userName: context.state.userName,
//       password: context.state.password
//     },
//     success: function(response) {
//       alert("Successfully saved record!");
//     },
//     error: function(response) {
//       alert("Error in saving record!");
//     }
//   });
// }

// function deleteUser(){
//   console.log("inside deleteHandler")
//   axios.delete("delete/malak")
//         .then(() => setmyUser("Delete successful"));
//   }
//   return (
//     <div>

           
//       <h2>log in:  </h2><br></br>
//     userName <input type="text" value={myUser.userName} onChange={updateuserName} />
//     password <input type="text" value={myUser.passWord} onChange={updatepassword} />
    
//       {JSON.stringify(myUser.userName)}
      
//       <button onClick={save}>Add</button>
//       <button onClick={deleteUser}>delet</button>
      
//     </div>
//   )
// }
import React from "react";
import {Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>socialNetworkForMentalHealth</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
   
        <Link to="/LogInPage">LogInPage</Link> |{" "}
        <Link to="/HomePage">HomePage</Link>|{" "}
        <Link to="/Chating">Chating</Link>|{" "}
      </nav>
      <Outlet/>
    </div>
  );
}
