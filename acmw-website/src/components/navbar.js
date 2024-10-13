import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { navmenuItems } from "./navmenuitems";
import "./navbar.css";
import pesLogo from "../assets/pesLogo.png"; 

class Navbar extends Component {
  state = {
    isMobileMenuOpen: false, 
  };

  toggleMobileMenu = () => {
    this.setState((prevState) => ({ isMobileMenuOpen: !prevState.isMobileMenuOpen }));
  };

  closeMobileMenu = () => {
    this.setState({ isMobileMenuOpen: false });
  };

  render() {
    return (
      <div className="navbar-component">
        <div>
          <img className="pes-logo" alt="pes-university-logo" src={pesLogo} />
        </div>

        {/* Hamburger Menu Button for Mobile Devices */}
        <div className="hamburger" onClick={this.toggleMobileMenu}>
          &#9776; {/* Unicode for hamburger icon */}
        </div>

        <div className={`navbar-items ${this.state.isMobileMenuOpen ? 'open' : ''}`}>
          {navmenuItems.map((item, index) => {
            return (
              <div key={index}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'nav-links active' : 'nav-links'
                  }
                  style={{ textDecoration: 'none' }}
                  to={item.url}
                  onClick={this.closeMobileMenu} 
                >
                  <i className = {`nav-icon ${item.icon}`}></i>
                  {item.title}{' '}
                  {index < navmenuItems.length - 1 && (
                    <span style={{ paddingLeft: '6.5px' }}> | </span>
                  )}
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Navbar;
