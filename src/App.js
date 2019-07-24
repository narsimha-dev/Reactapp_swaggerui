import React from 'react';
import './App.css';
 import RouterPath from './secure/Routerpath';
// import { withRouter } from "react-router-dom";
// import LocallStore from './config/Store';
function App() {
  return (
    <div className="App">
     <RouterPath/>
    {/* <AuthExample/> */}  
    </div>
  );
}

export default App;
// const AuthButton = withRouter(({ history }) =>
//   Store.isAppUserLoggedIn() ? (
//     <span > <Button onClick={() => { LocallStore.loginuser(() => history.push("/")); }} color="danger">Sign out</Button>  </span>
//   ) : (
//       <span onClick={() => { history.push("/login"); }}>Login</span>
//     )
// );

// export { AuthButton };
