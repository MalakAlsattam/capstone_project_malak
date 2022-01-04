import React from "react";
import axios from "axios"
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.css';
import { useState , useEffect} from "react";
import './in.css'
export default function AllComments() {
    const[comments, setcomments] = useState("")

        useEffect(() => {
            axios.get(`api/comment/${2}`)  
            .then(response => setcomments(response.data));
        },[]);

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
                                    <Card.Title>{item.user.userName}</Card.Title>
                                    <Card.Text>personalExperience Id :{'  '}{item.personalExperience.id}</Card.Text> 
                                     <Card.Text> comment :{'  '}{item.comment}</Card.Text>

                                </Card.Body>
                            </Card>
                        </CardGroup>


                    )))
                    }
                </Container>
            
            </div>

        );
    }