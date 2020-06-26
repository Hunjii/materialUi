import React, { Component } from "react";
import './Header.css';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

class Header extends Component {
    state = {
    isOpen: false
    };

    toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
    }

render() {
  return (
    <Router>
      <MDBNavbar color="white" dark expand="md">
        <MDBNavbarBrand>
          <strong className="black-text">Home</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
              <div className="waves-effect waves-light p-2">
              <MDBIcon far icon="bell black-text" /> 
              </div>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light p-2" to="#!">
                <div className="avatar">
                    <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                    alt=""
                    className="rounded-circle img-fluid"
                    />
                </div>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav>
                    <MDBIcon icon="ellipsis-h black-text" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}



export default Header;