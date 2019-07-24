import React, { Component } from 'react';
import { Route,Switch } from "react-router-dom";import Dashboard from './Dashboard';
import LoginPage from '../component/LoginPage';
import SignupPage from '../component/SignupPage';
import Posts from '../component/post/posts';
import Commnets from '../component/Commnets';
import AddPost from '../component/post/addPost';
class RouterPath extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
                <Switch>
                <Route exact path="/" component={Dashboard}/>
                <Route exact path="/login" component={LoginPage}/>
                <Route exact path="/signup" component={SignupPage}></Route>
                <Route exact path="/post" component={Posts}></Route>
                <Route exact path="/comments" component={Commnets}></Route>
                <Route exact path="/post/add" component={AddPost}/>
                </Switch>
         );
    }
}
 
export default RouterPath;

// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route
//       {...rest}
//       render={props =>
//         LocallStore.getToken()!=null? (
//           <Component {...props} />
//         ) : (
//             <Redirect
//               to={{
//                 pathname: "/login", // -> /login
//                 state: { from: props.location }
//               }}
//             />
//           )
//       }
//     />
//   );
