// import React from "react";
// import axios, { Axios } from "axios"
// import { useState, useEffect, useRef } from "react";


// export default function AllSpecialist() {

//     const [data, setData] = useState([{ specialistName: "", email: "", image: "", phone: "", moreInfo: "" }])

//     // useEffect(() => { axios.get("api/specialist")  .then(response => setData(response.data));

//     //     }
//     // },[data]);




//     function deleteSpecialist(specialistName) {
//         console.log("inside deleteHandler")
//         axios.delete(`/api/specialist/delete/${specialistName}`)
//         // .then(res => {

//         //     const data = setData.filter(item => item.specialistName !== specialistName);
//         //     this.setData({ data });

//         // })
//     }
//     return (
//         <div>

//             <table>



//                 <tr>
//                     <th >specialistName</th>
//                     <th >Email</th>
//                     <th >phone</th>
//                     <th >image</th>
//                     <th >moreInfo</th>

//                 </tr>

//                 <tbody>
//                     {data.map(item => {
//                         return <tr key={item.specialistName}>
//                             <td>{item.specialistName}</td>
//                             <td>{item.email}</td>
//                             <td>{item.phone}</td>
//                             <td><img height="100" width="100" src={item.image} /></td>
//                             <td>{item.moreInfo}</td>
//                             <td><button >DM</button></td>
//                             <td><button onClick={(e) => deleteSpecialist(item.specialistName, e)}>delete</button></td>
//                         </tr>
//                     })}
//                 </tbody>
//             </table>

//         </div>
//     )
// }

import React, { Component } from "react";
import axios, { Axios } from "axios"

export default class AllSpecialist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Specialist: [],
        };
    }

    componentDidMount() {
        axios.get("api/specialist").then(response => {
            const Specialist = response.data
            this.setState({ Specialist });

        });
    }
    deleteSpecialist(specialistName) {
        console.log("inside deleteHandler")
        axios.delete(`/api/specialist/delete/${specialistName}`)
            .then(res => {

                const Specialist = this.state.Specialist.filter(item => item.specialistName !== specialistName);
                this.setState({ Specialist });

            })
    }
    render() {
        return (
            <div>

                <table >
                    <thead>
                        <tr>
                            <th >specialistName</th>
                            <th >Email</th>
                            <th >phone</th>
                            <th >image</th>
                            <th >moreInfo</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.Specialist.map((item => (
                            <tr key={item.specialistName}>
                                <td>{item.specialistName}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td><img height="100" width="100" src={item.image} /></td>
                                <td>{item.moreInfo}</td>
                                <td><button >DM</button></td>
                                <td><button onClick={(e) => this.deleteSpecialist(item.specialistName, e)}>delete</button></td>

                            </tr>
                        )))
                        }
                    </tbody>
                </table>
            </div>

        );
    }
}