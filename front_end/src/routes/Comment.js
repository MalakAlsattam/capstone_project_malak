
import React from "react";
import axios from "axios"
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.css';
import { useState , useEffect} from "react";
import './in.css'
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import changID from "./AllPersonalExperience"
export default function Comment() {
    const[comments, setcomments] = useState([])
    const[personalExperienceId, setID] = useState([])

    console.log("in comments")
    let params = useParams();
    console.log(params.personalExperienceId)
        useEffect(() => {
            let path = `api/comment/${2}`;
            console.log(path)
            axios.get(path)  
            .then(response => console.log(response.data));
        },[]);

      
    // function changID(personalExperienceId){
    //     setID(personalExperienceId)
    // }
    // componentDidMount(personalExperienceId) {
    //     axios.get(`api/comment/${2}`).then(response => {
    //         const Post = response.data
    //         this.setState({ Post });

    //     });
    // }

    // render() {
        return (
            <div>
           
                <Container className="Container" >
                    {comments.map((item => (
                        
                          <CardGroup key={item.id}>
                            <Card className="item"  >
                            {/* <Card.Img height="100" width="100" src={item.personalExperience.image} /> */}
                                <Card.Body  >
                                    {/* <Card.Title>{item.user.userName}</Card.Title>
                                    <Card.Text>personalExperience Id :{'  '}{item.personalExperience.id}</Card.Text>  */}
                                   {/* <Button onClick={()=>changID(item.personalExperience.id)}>on </Button> */}
                                     <Card.Text> {'  '}{item.comment}</Card.Text>
                                   
                                </Card.Body>
                            </Card>
                        </CardGroup>


                    )))
                    }
                </Container>
            
            </div>

        );
    }
