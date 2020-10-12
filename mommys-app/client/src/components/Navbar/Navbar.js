import React, { Component } from "react";
//import { Button } from "../Button";
import { MenuItems } from "./MenuItems"
import { Link } from 'react-router-dom'
import Logout from '../auth/Logout';
import './Navbar.css'


class Navbar extends Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <nav className="NavbarItems">
        <Link style={{ textDecoration: "none" }} to="/"><h1 className="navbar-logo"><i className="fab fa-react"></i>אימל'ה</h1></Link>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url} >
                  {item.title}
                </Link>
              </li>
            )
          })}
          <li>
            <Logout />
          </li>
        </ul>
        { /* <Button> רישום</Button> */}
      </nav>
    )
  }
}

export default Navbar;
