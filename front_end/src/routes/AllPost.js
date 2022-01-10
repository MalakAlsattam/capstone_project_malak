
import React, { Component } from "react";
import axios, { Axios } from "axios"
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
export default class AllPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Post: [],
        };
    }

    componentDidMount() {
        axios.get("api/post").then(response => {
            const Post = response.data
            this.setState({ Post });

        });
    }
    deleteSpecialist(title) {
        let m = localStorage.getItem("logIn")
        if (m == "authenticatedADMIN") {
            console.log("inside deleteHandler")
            axios.delete(`/api/post/delete/${title}`)
                .then(res => {
                    const Post = this.state.Post.filter(item => item.title !== title);
                    this.setState({ Post });

                })
        }
        else { alert(" JUST FOR ADMIN !!") }
    }
    render() {
        return (
            // <div>

            //     <Container className="Container" >

            //         {this.state.Post.map((item => (
            //             <CardGroup key={item.title >
            //                 <Card className="item"  >
            //                     <Card.Body  >
            //                         <Card.Title>{item.title}</Card.Title>
            //                         <Card.Img height="300" width="100" src={item.image} />
            //                         <Card.Text  >{item.text} </Card.Text>
            //                         <Card.Text  >{item.specialist.specialistName} </Card.Text>
            //                         <Card.Text  >{item.specialist.email} </Card.Text>
            //                         <Card.Text  >{item.specialist.phone} </Card.Text>
            //                         <Button onClick={(e) => this.deleteSpecialist(item.title, e)}>delete</Button>
            //                     </Card.Body>
            //                 </Card>
            //             </CardGroup>

            //                   )))
                        

            // </Container>
                        
            //         </div >
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

                {this.state.Post.map((item => (
                    <CardGroup key={item.id}>
                        <Card className="item"  >
                            
                            <Card.Body  >
                            <Card.Title>{item.title}</Card.Title>
                                     <Card.Img height="300" width="100" src={item.image} />
                                    <Card.Text  >{item.text} </Card.Text>
                                    <Card.Text  >specialistName: {item.specialist.specialistName} </Card.Text>
                                    <Card.Text  >email:{item.specialist.email} </Card.Text>
                                     <Card.Text  >phone:{item.specialist.phone} </Card.Text>
                                    <Button variant="btn btn-secondary btn-lg" onClick={(e) => this.deleteSpecialist(item.title, e)}>delete</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                )))
                }

            </Container>
        </div >

                );
    }
}