import React, { Component } from "react";
import axios, { Axios } from "axios"
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import './in.css'
import { Outlet, Link } from "react-router-dom";
import AllComments from "./AllComments";

export default class AllPersonalExperience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personalExperience: [],
            comment:"",
            personalExperienceId:[],
           
        };
    }

    componentDidMount() {
        
        axios.get("api/personalExperience").then(response => {
            const personalExperience = response.data
            this.setState({ personalExperience });
           

        });
    }
    deletepersonalExperience(id) {
        let m=sessionStorage.getItem("logIn")
        if(m=="authenticatedADMIN"){
        console.log("inside deleteHandler")
        axios.delete(`api/PersonalEx/delete/${id}`)
            .then(res => {
                const personalExperience = this.state.personalExperience.filter(item => item.id !== id);
                this.setState({ personalExperience });
                
            })}else {alert("your NOT ADMIN")}
            
    } 
    sendPost = (pExpId, userName) => {
        console.log(this.state.comment)
        console.log("personal exp"+pExpId)
          const myData = {
              comment:this.state.comment,
              personalExperience:{id:pExpId},
              user:{userName:userName}
        }
           console.log(myData)    
            axios({
                method: "post",
                url: "api/comment/add",
                data:
                myData
          
              });
            }
            //  changID=(personalExperienceId) => {
            //     console.log("calling allcomments");
            //    return <AllComments/>

                  
            //     }
            
    render() {
        return (
            
                <div>
    
                    {/* <table >
                        <thead>
                            <tr>
    
                                <th >Text</th> 
                                <th >image</th>
                                <th >userName</th> 
                            </tr>
                        </thead>
                        <tbody> */}
                    <Container className="Container" >
                        
                        {this.state.personalExperience.map((item => (
                            <CardGroup key={item.id}>
                                <Card className="item"  >
                                    <Card.Img height="300" width="100" src={item.image} />
                                    <Card.Body  >
                                        <Card.Title>{item.user.userName}</Card.Title>
                                        <Card.Text  >{item.text }</Card.Text>
    
                                        <Card.Text><input placeholder="comment" type='text'
                                        onChange={(event) => { this.setState({comment: event.target.value})}} ></input>
                                        <button type="button" class="btn btn-secondary btn-sm"
                                         onClick={()=>{this.sendPost(item.id, item.user.userName)}}>send</button></Card.Text>
    
                                        <Button variant="btn btn-secondary btn-lg" 
                                        onClick={(e) => this.deletepersonalExperience(item.id, e)}> delete</Button>
                                       <Link to={`/${item.id}`}>
                                        <Button  variant="btn btn-secondary btn-lg"> comments</Button>
                                        </Link>
                                        {/* </tr> */}
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                        )))
                        }
                        {/* </tbody>
                    </table> */}
                    </Container>
                </div>
    
    
            );
        }
    }
    
     
    
    
    
    
                         
                 



            
 
