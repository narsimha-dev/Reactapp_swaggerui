import React, { Component } from 'react';
import {  Link } from 'react-router-dom';
import {Table,Button} from 'reactstrap';
import {postApiCall} from '../../services/apiCall';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            posts:[],
         }
    }
    componentDidMount=()=>{
        postApiCall((posts)=>this.setState({posts}),(error)=>{console.log(error)})
    }
    render() {
        let listPostdata;
        if(this.state.posts!==[]){
           listPostdata=this.state.posts.map((post,key)=>{
            return <tr key={post.id}>
                <th>{key+1}</th>
                 <th>{post.title}</th>
                 <th>{post.content}</th>
                 <th>{post.description}</th>
                 <th><Button color="info">Update</Button></th>
                  <th><Button color="danger">Delete</Button></th>
            </tr>
        })
    }
        return (
            <>
            <Link to="/post/add"><Button color="success" onClick={this.click}>Add Post</Button></Link>
          <Table>
            <thead>
              <tr>
                <th>Sl No.</th>
                <th>Title</th>
                <th>Content</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
            {listPostdata}
            </tbody>
          </Table>
          </>
        );
      }
}
 
export default Posts;