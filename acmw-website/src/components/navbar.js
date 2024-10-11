import {navmenuItems} from "./navmenuitems.js"
import "./navbar.css";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import pesLogo from "./pesLogo.png";

class Navbar extends Component {
    
    render(){
            return(
            <div className="navbar-component">
                <div>
                    <img className="pes-logo" alt="pes-university-logo" src={pesLogo}/>
                </div>

                <div className="navbar-items">
                {navmenuItems.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <NavLink
                                                className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'}
                                                style={{textDecoration:"none"}}
                                                to={item.url}
                                            >
                                                {item.title} {index < navmenuItems.length - 1 && <span style={{paddingLeft:"6.5px"}}> | </span>}
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