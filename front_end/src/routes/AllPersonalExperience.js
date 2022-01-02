import React, { Component } from "react";
import axios, { Axios } from "axios"
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import './in.css'

export default class AllPersonalExperience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personalExperience: [],
        };
    }

    componentDidMount() {
        axios.get("api/personalExperience").then(response => {
            const personalExperience = response.data
            this.setState({ personalExperience });

        });
    }
    deletepersonalExperience(id) {
        console.log("inside deleteHandler")
        axios.delete(`api/PersonalEx/delete/${id}`)
            .then(res => {
                const personalExperience = this.state.personalExperience.filter(item => item.id !== id);
                this.setState({ personalExperience });

            })
    }
    render() {
        return (
            
                <div>
    
                    {/* <table >
                        <thead>
                            <tr>
    
                                <th >Text</th> 
                                <th >image</th>
                                <th >userName</th> 
                            </tr>
                        </thead>
                        <tbody> */}
                    <Container className="Container" >
                        {this.state.personalExperience.map((item => (
                            <CardGroup key={item.id}>
                                <Card className="item"  >
                                    <Card.Img height="100" width="100" src={item.image} />
                                    <Card.Body  >
                                        <Card.Title>{item.user.userName}</Card.Title>
                                        <Card.Text>{item.text}</Card.Text>
    
                                        {/* <Card.Text><input placeholder="commits" type='text'></input>
                                        <button >send</button></Card.Text> */}
    
                                        <Button variant="btn btn-secondary btn-lg" onClick={(e) => this.deletepersonalExperience(item.id, e)}>delete</Button>
    
                                        {/* </tr> */}
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                        )))
                        }
                        {/* </tbody>
                    </table> */}
                    </Container>
                </div>
    
    
            );
        }
    }
    
     
    
    
    
    
                         
                 



            
 
