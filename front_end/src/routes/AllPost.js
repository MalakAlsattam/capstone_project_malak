
import React, { Component } from "react";
import axios, { Axios } from "axios"
import { Card } from "stream-chat-react";

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

                        <table >
                            <thead>
                                <tr>
                                    <th >title</th>
                                    <th >Text</th>
                                    
                                    <th >image</th>
                                   <th >SpecialistName</th> 

                                </tr>
                            </thead>
                            <tbody>
                                {this.state.Post.map((item => (
                                    <tr key={item.title}>
                                        <td>{item.title}</td>
                                        <td>{item.text}</td>
                                        <td><img height="100" width="100" src={item.image} /></td>
                                        <td>{item.specialist.specialistName}</td>
                                        <td><button onClick={(e) => this.deleteSpecialist(item.title, e)}>delete</button></td>

                                    </tr>
                                )))
                                }
                            </tbody>
                        </table>
                    </div>

                );
            }
        }