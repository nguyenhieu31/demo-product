/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink, Link } from "react-router-dom";
import './nav-bar.css'
import React from 'react';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function NavBar() {
  const { cart } = useSelector((state) => state.product);
  function getTotal() {
    return cart.reduce((total, curVal) => {
      return total + curVal.quantity;
    }, 0);
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">Demo-App</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ display: 'flex', alignItems: 'center' }}>
            <li className="nav-item">
              <NavLink to="/home" className="nav-link active" aria-current="page">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/product" className="nav-link">Products</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <AccountCircleIcon />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <Link to="/login" style={{ width: "100%" }}>login</Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="/signup" style={{ width: "100%" }}>signup</Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="/logout" style={{ width: "100%" }}>logout</Link>
                  </MenuItem>
                </Menu>
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link disabled">Contact</a>
            </li> */}
          </ul>
          <form className="d-flex" role="search" style={{ display: 'flex', gap: '1rem' }}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
            <NavLink to="/cart" className="nav-link">
              <IconButton aria-label="cart" sx={{ margin: "-10px" }}>
                <Badge badgeContent={getTotal()} color="success">
                  <ShoppingCartIcon sx={{ color: "#198754" }} />
                </Badge>
              </IconButton>
            </NavLink>
          </form>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;