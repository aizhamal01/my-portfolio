import React from "react";
import { Link } from "react-router-dom"
import { NavItems } from "./NavItems";
import { Col} from 'react-bootstrap';
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="NavbarItems">
        <div className="menu-icon"></div>
        <ul className="nav-menu">
          {NavItems.map((item, index) => {
            return (
              <Col sm={2} className="nav-links" key={index}>
                <Link className={item.cName} to={item.url}>{item.title}</Link>
              </Col>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;