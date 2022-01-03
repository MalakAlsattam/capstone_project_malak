import React, { Component } from "react";
import axios, { Axios } from "axios"
//import { Card } from "stream-chat-react";
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import './in.css'
export default class AllSpecialistAdmin extends Component {
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
        console.log("inside deleteHandler")
        axios.delete(`/api/specialist/delete/${specialistName}`)
            .then(res => {
                const specialist = this.state.specialist.filter(item => item.specialistName !== specialistName);
                this.setState({ specialist });

            })
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
