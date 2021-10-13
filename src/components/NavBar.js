import React, { useState } from 'react';
import { NavLink as RouterNavLink, useHistory } from "react-router-dom";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useAuth0 } from "@auth0/auth0-react";
import Logo from "../st-logo.png";

export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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

    const history = useHistory();

    const routeChange = (newPath) => { 
        let path = newPath; 
        history.push(path);
        handleClose();
    }

  return (
      <div className="d-flex justify-content-between p-4">
        <div>
            <div className="d-flex welcome">
                <img src={Logo} alt='' className="st-logo" onClick={() => routeChange("/")} />
                {(isAuthenticated && user.name != "Zach Jacobs") && (<div className="d-none d-sm-block" > Welcome, {user.name}! </div>)}
                {(isAuthenticated && user.name == "Zach Jacobs") && (<div className="d-none d-sm-block" > Get lost, {user.name}! </div>)}
            </div>
        </div>
        <div>
            <img
                src={user.picture}
                alt="Profile"
                className="nav-user-profile rounded-circle"
                width="50"
                onClick={handleClick}
                style={{ cursor: "pointer" }}
            />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem disabled={true}>{user.name}</MenuItem>
          <MenuItem
              onClick={() => routeChange("/profile")}
          >
              Profile
          </MenuItem>
          <MenuItem 
              onClick={() => logoutWithRedirect()}>
              Logout
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}