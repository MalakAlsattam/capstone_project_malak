
import React, { Component } from "react";
import axios, { Axios } from "axios"
import "../CSS/AllPost.css"
import Button from 'react-bootstrap/Button';
export default class AllPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Post: [],
            login: "",
        };
    }

    componentDidMount() {
        const log = localStorage.getItem("logIn");
        this.setState.login = log;
        console.log(log)
        axios.get("api/post").then(response => {
            const Post = response.data
            this.setState({ Post });

        });
    }

    deleteSpecialist(title) {

        console.log("inside deleteHandler")
        axios.delete(`/api/post/delete/${title}`)
            .then(res => {
                const Post = this.state.Post.filter(item => item.title !== title);
                this.setState({ Post });

            })

    }
    render() {
        return (

            <div>


                <div className="container3">

                    {this.state.Post.map((item => (
                        <div className="card3" key={item.id}>


                            <h4> {item.title}</h4>
                            <img height="200" width="400" src={item.image} />
                            <div>{item.text}
                            <br></br>

                                by: {item.specialist.specialistName}<br></br>
                                {/* email:{item.specialist.email}<br></br>
                            phone:{item.specialist.phone}<br></br> */}

                                {this.setState.login == "authenticatedADMIN" &&
                                    <Button variant="btn btn-secondary btn-lg" onClick={(e) => this.deleteSpecialist(item.title, e)}>delete</Button>
                                } </div>
                        </div>)))
                    }
                </div>
            </div>

        );
    }
}