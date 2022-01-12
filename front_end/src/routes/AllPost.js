
import React, { Component } from "react";
import axios, { Axios } from "axios"
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card'
//import 'bootstrap/dist/css/bootstrap.css';
import "../CSS/AllPost.css"
import Button from 'react-bootstrap/Button';
import swal from "sweetalert"
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
        else { swal(" YOU ARE NOT ADMIN !!") }
    }
    render() {
        return (

            <div>


                <div className="container3">

                    {this.state.Post.map((item => (
                        <div className="card3" key={item.id}>


                           <h4> {item.title}</h4>
                            <img height="200" width="400" src={item.image} />
                               <div>{item.text}<br></br>
                           
                           by: {item.specialist.specialistName}<br></br>
                            {/* email:{item.specialist.email}<br></br>
                            phone:{item.specialist.phone}<br></br> */}
                            <Button variant="btn btn-secondary btn-lg" onClick={(e) => this.deleteSpecialist(item.title, e)}>delete</Button>
                            </div>
                        </div>)))
                    }
                </div></div>

        );
    }
}