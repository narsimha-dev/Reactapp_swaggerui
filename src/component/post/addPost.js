import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label,Alert, Input } from 'reactstrap';
import {addPostApiCall} from '../../services/apiCall';
import ListPost from './posts';

class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            content:'',
            description:'',
            successMessage:false,
            validate:false,
                     }
    }
    handleChange=(e)=>{
this.setState({[e.target.name]:e.target.value})
    }
    savePost=(e)=>{
        e.preventDefault();
        const data={
            title:this.state.title,
            content:this.state.content,
            description:this.state.description
        }
       addPostApiCall(this.success,this.failure, data)
    }
    success=(status)=>{
        if(status===200){
        this.setState({ successMessage:true, validate:true  });
        }
    }
    failure=(error)=>{
        console.log(error)
    }
    render() {
        if(this.state.validate){
          return <ListPost/>
        }
        return (
            <>
            {this.state.successMessage && <Alert>Add Post</Alert>}
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Title</Label>
              <Input type="text" name="title"  placeholder="Title"  value={this.state.title} onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Content</Label>
              <Input type="text" name="content" placeholder="Content" value={this.state.content} onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Description</Label>
              <Input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.handleChange}/>
            </FormGroup>
            <Button color="success" onClick={(e)=>this.savePost(e)} >Save</Button> &nbsp;
            <Link to="/"><Button color="danger">Cancel</Button></Link>
          </Form>
          </>
        );
      }
    }
    
 
export default AddPost;