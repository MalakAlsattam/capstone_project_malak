import React from "react";
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from "react";
import "../CSS/AllComments.css"
import { useParams } from "react-router-dom";


export default function AllComments() {
    const [comments, setcomments] = useState([])
    const [personalExperienceId, setID] = useState([])
    let params = useParams();

    //see the comments for spesific post 
    console.log(params.personalExperienceId)
    useEffect(() => {
        axios.get(`api/comment/${params.personalExperienceId}`)
            .then(response => setcomments(response.data));
    }, []);
    return (
        <div >
            <div className="container4" >


                {comments.map((item => (

                    <div className="card4" key={item.id}>

                        <p> {item.comment}</p>


                    </div>

                )))
                }

            </div>
        </div>

    );
}

