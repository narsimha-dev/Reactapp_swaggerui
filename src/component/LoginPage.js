import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Alert,Form,Label,Input,Button,FormGroup} from 'reactstrap';
import {loginCall} from '../services/apiCall';

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            cancelButton:false,
            doubleCilck:false,          
        }
    }
    handleChange=(event)=>{
        this.setState({ [event.target.name]: event.target.value });
    }
    submitForn=(e)=>{
        e.preventDefault();
        
        const data={
            username:this.state.username,
            password:this.state.password
        }
        loginCall(this.success,this.failure,data)
      }
        success=(status)=>{
          if(status===200){
          this.setState({seccessMessage:true,doubleCilck:true,username:'',password:''})
          }
        }
        failure=(error)=>{
          console.log(error)
        }
        cancelButton=()=>{
           this.setState({username:'',password:''})
        }
  render() {
    // console.log(this.props.location)
    // let {from}=this.props.location.state || {from:{pathname:"/login"}};
    // let {redirectToReferrer}=this.state;
    // if(redirectToReferrer) return <Redirect to={from}/>
    return (
      <>
              {this.state.seccessMessage && <Alert color="success">Successfully Login</Alert>}
      <p style={{color:"#FF88FF"}} >Login Page</p>
        <Form>
        <FormGroup>
          <Label for="exampleEmail">UserName</Label>
          <Input type="text" name="username" id="username" placeholder="UserName" value={this.state.username}  onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Password " value={this.state.password} onChange={this.handleChange} />
        </FormGroup>
        <Button color="info" disabled={this.state.doubleCilck} onClick={(e)=>this.submitForn(e)}>Submit</Button> &nbsp;
       <Link to="/"><Button color="danger" onClick={this.cancelButton}>Cancel</Button></Link>
      </Form>
      </>
    );
  }
}
 
export default LoginPage;