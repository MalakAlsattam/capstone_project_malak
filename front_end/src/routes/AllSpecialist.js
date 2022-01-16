
import React, { Component } from "react";
import axios, { Axios } from "axios"
import "../CSS/Allspecialist.css"
import swal from "sweetalert"

export default class AllSpecialist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            specialist: [],
            login: "",
        };
    }

    componentDidMount() {
        const log = localStorage.getItem("logIn");
        this.setState.login = log;
        console.log(log)
        axios.get("api/specialist").then(response => {
            const specialist = response.data
            this.setState({ specialist });

        });
    }
    deleteSpecialist(specialistName) {
        let login = localStorage.getItem("logIn");
        if (login == "authenticatedADMIN") {
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





                <div className="container1">
                    {this.state.specialist.map((item => (
                        <div className="card1" key={item.specialistName}>
                            <table>
                                <tr>
                                    <td><img height={130} width={150} src={item.image} /></td>

                                    <td>
                                        <h4 style={{ color: "#48594F" }}><b >Name :</b>{'  '} {item.specialistName}</h4><br></br>
                                        <h4 style={{ color: "#48594F" }}> <b> email :</b>{'  '}{item.email}</h4><br></br>
                                        <h4 style={{ color: "#48594F" }}><b>phone : </b>{'  '}{item.phone}</h4><br></br>
                                        <h4 style={{ color: "#48594F" }}> <b>moreInfo :</b>{'  '}{item.moreInfo}</h4>
                                    </td></tr>
                            </table>

                            {this.setState.login == "authenticatedADMIN" && 
                            <button type="button" class="btn btn-outline-danger" onClick={(e) => this.deleteSpecialist(item.specialistName, e)}>delete</button>}

                        </div>)))
                    }
                </div>
            </div>

        );
    }
}

