import React, { Component } from "react";
import axios, { Axios } from "axios"
import 'bootstrap/dist/css/bootstrap.css';
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

        axios.get("https://help-hope-backend.herokuapp.com/api/personalExperience").then(response => {
            const personalExperience = response.data
            this.setState({ personalExperience });


        });
    }

    //this function for delete personalExperience
    deletepersonalExperience(id) {

        console.log("inside deleteHandler")
        axios.delete(`https://help-hope-backend.herokuapp.com/api/PEx/delete/${id}`)
            .then(res => {
                const personalExperience = this.state.personalExperience.filter(item => item.id !== id);
                this.setState({ personalExperience });

            })

    }

    sendPost = (pExpId, userName) => {


        if (this.setState.login == "authenticatedADMIN" || this.setState.login == "authenticatedUSER") {
            // console.log(this.state.comment)
            // console.log("personal exp" + pExpId)
            const myData = {
                comment: this.state.comment,
                personalExperience: { id: pExpId },
                user: { userName: userName }
            }
            console.log(myData)
            axios({
                method: "post",
                url: "https://help-hope-backend.herokuapp.com/api/comment/add",
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
                <div>
                <footer class="navbar navbar-dark bg-dark">
       
       <p > &copy; 2022 MALAK &nbsp;&nbsp;
         <a href="https://github.com/MalakAlsattam" class="text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
           <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
         </svg></a>
       </p>
     </footer>
                </div>
            </div>


        );
    }
}













