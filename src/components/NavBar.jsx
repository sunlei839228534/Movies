import React from 'react';
import { NavLink } from 'react-router-dom'

class NavBar extends React.Component {
  state = {}
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/movies" >Vidly</NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/movies" >Movies</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/customers" >Customers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/reantals">
                Rantals
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;