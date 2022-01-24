
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
        axios.get("https://help-hope-backend.herokuapp.com/api/post").then(response => {
            const Post = response.data
            this.setState({ Post });

        });
    }
    //this function for delete post 
    deleteSpecialist(title) {

        console.log("inside deleteHandler")
        axios.delete(`https://help-hope-backend.herokuapp.com/api/post/delete/${title}`)
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