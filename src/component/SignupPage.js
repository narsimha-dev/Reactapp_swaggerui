import React,{Fragment,Component} from 'react';
import {Link} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input,Alert } from 'reactstrap';
import {signupCall} from '../services/apiCall';


class SignupPage extends Component {
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
       signupCall(this.success,this.failure,data)
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
    return (
        <Fragment>
        {this.state.seccessMessage && <Alert color="success">Successfully signup with user</Alert>}
        <p style={{color:"#FF88FF"}}>SignUp Page</p>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">UserName</Label>
          <Input type="text" name="username" id="username" placeholder="userName" value={this.state.username}  onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password " value={this.state.password} onChange={this.handleChange} />
        </FormGroup>
        <Button color="info" disabled={this.state.doubleCilck} onClick={(e)=>this.submitForn(e)}>Submit</Button> &nbsp;
        <Link to="/"><Button color="danger" onClick={this.cancelButton}>Cancel</Button></Link>
      </Form>
      
      </Fragment>
    );
  }
}
export default SignupPage;