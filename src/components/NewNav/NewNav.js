import React, { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "@material-ui/core/Button";
import Logo from "../../st-logo.png";

import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { useAuth0 } from "@auth0/auth0-react";


const NavBar = () => {
  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    <Navbar className="p-4 d-flex justify-content-between" expand="sm">
        
        <div className="d-flex welcome">
            <img src={Logo} alt='' className="st-logo" />
            {isAuthenticated && (<div> Welcome, {user.name}! </div>)}
        </div>

        <Nav className="d-none d-md-block" navbar>
            {!isAuthenticated && (
            <NavItem>
                <Button
                id="qsLoginBtn"
                color="primary"
                className="btn-margin"
                onClick={() => loginWithRedirect()}
                >
                Log in
                </Button>
            </NavItem>
            )}
            {isAuthenticated && (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret id="profileDropDown">
                <img
                    src={user.picture}
                    alt="Profile"
                    className="nav-user-profile rounded-circle"
                    width="50"
                />
                </DropdownToggle>
                <DropdownMenu placement="top">
                    <DropdownItem header>{user.name}</DropdownItem>
                    <DropdownItem
                        tag={RouterNavLink}
                        to="/profile"
                        className="dropdown-profile"
                        activeClassName="router-link-exact-active"
                    >
                        <FontAwesomeIcon icon="user" className="mr-3" /> Profile
                    </DropdownItem>
                    <DropdownItem
                        id="qsLogoutBtn"
                        onClick={() => logoutWithRedirect()}
                    >
                        <FontAwesomeIcon icon="power-off" className="mr-3" /> Log
                        out
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            )}
        </Nav>
    </Navbar>
  );
};

export default NavBar;
