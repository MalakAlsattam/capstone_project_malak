import React, { Component } from "react";
import axios, { Axios } from "axios"
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import "../CSS/AllpersonalEx.css"
import { Link } from "react-router-dom";
import swal from "sweetalert"
export default class AllPersonalExperience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personalExperience: [],
            login: "",
            personalExperienceId: [],

        };
    }

    componentDidMount() {
        const log = localStorage.getItem("logIn");
        this.setState.login = log;
        console.log(log)

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
    sendPost = (pExpId, userName) => {


        if (this.setState.login == "authenticatedADMIN" || this.setState.login == "authenticatedUSER") {
            console.log(this.state.comment)
            console.log("personal exp" + pExpId)
            const myData = {
                comment: this.state.comment,
                personalExperience: { id: pExpId },
                user: { userName: userName }
            }
            console.log(myData)
            axios({
                method: "post",
                url: "api/comment/add",
                data:
                    myData

            });
        }
        else { swal("LOG IN FIRST PLEASE ") }
    }


    render() {
        return (

            <div>
                <div className="container2">
                    {this.state.personalExperience.map((item => (
                        <div className="card2" key={item.id}>

                            <h4>{item.user.userName}</h4>

                            <img height={200} width={300} src={item.image} />

                            <br></br>
                            <br></br>
                            <p>{item.text}</p>
                            <br></br>

                            <input className="textarea" placeholder="comment" type='text'
                                onChange={(event) => { this.setState({ comment: event.target.value }) }} ></input>

                            <Link to={`/${item.id}`}> <button
                                onClick={() => { this.sendPost(item.id, item.user.userName) }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-square-dots" viewBox="0 0 16 16">
                                    <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                    <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                </svg></button> </Link>
                            <div>
                                <br></br>

                                {this.setState.login == "authenticatedADMIN" &&
                                    <button type="button" class="btn btn-outline-danger"
                                        onClick={(e) => this.deletepersonalExperience(item.id, e)}> Delete</button>}

                                <Link to={`/${item.id}`}>
                                    <button type="button" class="btn btn-outline-success"> comments</button>
                                </Link></div>



                        </div>)))
                    }
                </div>
            </div>


        );
    }
}













