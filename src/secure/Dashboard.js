import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Collapse,Navbar, NavbarToggler, NavbarBrand, Nav,NavItem,NavLink} from 'reactstrap';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {  
    return (
      <>
      {this.props.children}
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"> Communicate</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/signup/">Signup</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/post/add">Add Post</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/post">Post</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/comments">Comments</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      {/* <Footer/> */}
      </>
    );
  }
}
Dashboard.protoType={
  children:PropTypes.object.isRequired
}