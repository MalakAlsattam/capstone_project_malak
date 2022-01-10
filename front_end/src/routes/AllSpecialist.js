// import React from "react";
// import axios, { Axios } from "axios"
// import { useState, useEffect, useRef } from "react";


// export default function AllSpecialist() {

//     const[data, setData] = useState([{ specialistName: "", email: "", image: "", phone: "", moreInfo: "" }])

//     useEffect(() => {
//         axios.get("api/specialist")  
//         .then(response => setData(response.data));


//     },[data]);}

//     function deleteSpecialist(specialistName) {
//         console.log("inside deleteHandler")
//         axios.delete(`/api/specialist/delete/${specialistName}`)
//         // .then(res => {

//         //     const data = setData.filter(item => item.specialistName !== specialistName);
//         //     this.setData({ data });

//         // })

//     return (
//         <div>

//             <table>



//                 <tr>
//                     <th >specialistName</th>
//                     <th >Email</th>
//                     <th >phone</th>
//                     <th >image</th>
//                     <th >moreInfo</th>

//                 </tr>

//                 <tbody>
//                     {data.map(item => {
//                         return <tr key={item.specialistName}>
//                             <td>{item.specialistName}</td>
//                             <td>{item.email}</td>
//                             <td>{item.phone}</td>
//                             <td><img height="100" width="100" src={item.image} /></td>
//                             <td>{item.moreInfo}</td>
//                             <td><button >DM</button></td>
//                             <td><button onClick={(e) => deleteSpecialist(item.specialistName, e)}>delete</button></td>
//                         </tr>
//                     })}
//                 </tbody>
//             </table>

//         </div>
//     )
// }

import React, { Component } from "react";
import axios, { Axios } from "axios"
//import { Card } from "stream-chat-react";
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import './in.css'
import { Alert } from "bootstrap";
export default class AllSpecialist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            specialist: [],
        };
    }

    componentDidMount() {
        
        axios.get("api/specialist").then(response => {
            const specialist = response.data
            this.setState({ specialist });

        });
    }
    deleteSpecialist(specialistName) {
        let m= localStorage.getItem("logIn");
        if(m=="authenticatedADMIN"){
        console.log("inside deleteHandler")
        axios.delete(`/api/specialist/delete/${specialistName}`)
            .then(res => {
                const specialist = this.state.specialist.filter(item => item.specialistName !== specialistName);
                this.setState({ specialist });

            })}
            else {alert("your Not Admin")}
    }
    render() {
                return (
                    <div>
                        

                        {/* <table >
                            <thead>
                                <tr>
                                    <th >specialistName</th>
                                    <th >Email</th>
                                    <th >phone</th>
                                    <th >image</th>
                                    <th >moreInfo</th>

                                </tr>
                            </thead>
                            <tbody> */}
                            
                            <Container className="Container" >
                                {this.state.specialist.map((item => (
                                      
                                           <CardGroup  key={item.specialistName}>
                                               
                                            <Card className="item"  >
                                            
                                            <Card.Img className="img"  src={item.image}  />
                                            <Card.Body  >
                                              <Card.Title>specialistName :{'  '} {item.specialistName}</Card.Title>
                                               <Card.Text> email :{'  '}{item.email}</Card.Text>
                                               <Card.Text> phone : {'  '}{item.phone}</Card.Text>
                                               <Card.Text> moreInfo :{'  '}{item.moreInfo}</Card.Text>
                                                
                                    
                                        
                                       
                                            <Button variant="btn btn-secondary btn-lg">DM</Button> {'  '}

                                        <Button variant="btn btn-secondary btn-lg" onClick={(e) => this.deleteSpecialist(item.specialistName, e)}>delete</Button>
                                            </Card.Body>
                                            </Card>
                                        </CardGroup> 
                                       
                                        
                                ))) 
                                }
                          </Container> 
                            {/* </tbody>
                        </table> */}
                        
                    </div>

                );
            }
        }

   //     return (
    //        <div>


                {/* <tr>
                    <th >specialistName</th>
                    <th >Email</th>
                    <th >phone</th>
                    <th >image</th>
                    <th >moreInfo</th>

                </tr> */}

        
// {this.state.Specialist.map((item => (
//                     key = { item.specialistName }
//                     < Card style = {{ width: '18rem' }}>
//                 <Card.Img variant="top" src="holder.js/100px180" />
//                 <Card.Body>
               
//                     <Card.image><img height="100" width="100" src={item.image} /></Card.image>
//                     <Card.Title> {item.specialistName}</Card.Title>
//                     <Card.email>{item.email}</Card.email>
//                     <Card.phone>{item.phone}</Card.phone>
//                     <Card.Text>{item.moreInfo}</Card.Text>
//                     <Button variant="primary">Dm</Button>
//                     <Button variant="primary" onClick={(e) => this.deleteSpecialist(item.specialistName, e)}>Delete</Button>
//                 </Card.Body>
//             </Card>  
//         )))
//     }
          
//     </div>

// );
// }
// }

