
import React, { Component } from "react";
import axios, { Axios } from "axios"
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import "../CSS/in.css"
import swal from "sweetalert"

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
        let m = localStorage.getItem("logIn");
        if (m == "authenticatedADMIN") {
            console.log("inside deleteHandler")
            axios.delete(`/api/specialist/delete/${specialistName}`)
                .then(res => {
                    const specialist = this.state.specialist.filter(item => item.specialistName !== specialistName);
                    this.setState({ specialist });

                })
        }
        else { swal("YOU ARE NOT ADMAI !!") }
    }
    render() {
        return (
            <div>




                <Container className="Container" >
                    {this.state.specialist.map((item => (

                        <CardGroup key={item.specialistName}>

                            <Card className="item"  >

                                <Card.Img className="img" src={item.image} />
                                <Card.Body className="body1"  >
                                    <Card.Title>specialistName :{'  '} {item.specialistName}</Card.Title>
                                    <Card.Text> email :{'  '}{item.email}</Card.Text>
                                    <Card.Text> phone : {'  '}{item.phone}</Card.Text>
                                    <Card.Text> moreInfo :{'  '}{item.moreInfo}</Card.Text>


                                    <Button variant="btn btn-secondary btn-lg" onClick={(e) => this.deleteSpecialist(item.specialistName, e)}>delete</Button>
                                </Card.Body>
                            </Card>
                        </CardGroup>


                    )))
                    }
                </Container>


            </div>

        );
    }
}

