import React, { Component } from "react";
import axios, { Axios } from "axios"


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

                <table >
                    <thead>
                        <tr>

                            <th >Text</th> 
                            <th >image</th>
                            <th >userName</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.personalExperience.map((item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.text}</td>
                                <td><img height="100" width="100" src={item.image} /></td>
                                <td>{item.user.userName}</td>
                                <td><input type='text'></input></td>
                                <td><button onClick={(e) => this.deletepersonalExperience(item.id, e)}>delete</button></td>

                            </tr>
                        )))
                        }
                    </tbody>
                </table>
            </div>

        );
    }
}