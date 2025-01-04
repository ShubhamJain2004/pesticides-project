import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
import "./Head.css";
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import OutsideClickHandler from "react-outside-click-handler";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";

function Head() {
  const [MenuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (MenuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !MenuOpened && "-100%" };
    }
  };
  return (
    <>
      <section className="h-wrapper">
        <div className="flexCenter paddings innerwidth h-container">
        <Navbar.Brand href="/Home">
        <Link to="/Home">
        <img
            src="./flogo.png"
            alt="logo"
            width={160}
            height={90}
            className="logo"
          />
          </Link>
          </Navbar.Brand>

          <OutsideClickHandler
            onOutsideClick={() => {
              setMenuOpened(false);
            }}
          >
            <div
              className="flexCenter h-menu"
              style={getMenuStyles(MenuOpened)}
            >
              <Nav.Link href="/Home" >
                <Link to="/Home" style={{color:"white",textDecoration:"none"}}>Home</Link>
              </Nav.Link>

              <Nav.Link href="/Aboutus">
                <Link to="/Aboutus" style={{color:"white",textDecoration:"none"}}>Aboutus</Link>
              </Nav.Link>

              <Nav.Link>
                <Dropdown as={NavItem}>
                  <Dropdown.Toggle as={NavLink}>
                    <Link to="/MainServices" style={{color:"white",textDecoration:"none"}}>Services</Link>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <NavDropdown.Item href="ResidentialServices">
                      <Link to="/Residential" style={{color:"Black"}}>Residential</Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item href="CommercialServices">
                      <Link to="/Commercial" style={{color:"Black"}}>Commercial</Link>
                    </NavDropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link>

              <Nav.Link href="Vendors">
                <Link to="/Vendors" style={{color:"white",textDecoration:"none"}}>Vendors</Link>
              </Nav.Link>

              <Nav.Link>
                <Dropdown as={NavItem}>
                  <Dropdown.Toggle as={NavLink}>
                    <Link to="/User" style={{color:"white",textDecoration:"none"}}>User</Link>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <NavDropdown.Item href="">
                      <Link to="/Login/Signup" style={{color:"Black"}}>Login/Signup</Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item href="">
                      <Link to="/Logout" style={{color:"Black"}}>Logout</Link>
                    </NavDropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link>

              <button className="button">
                <Nav.Link href="">
                  <Link to="" style={{textDecoration:"none"}}>Contactus</Link>
                </Nav.Link>
              </button>
            </div>
          </OutsideClickHandler>
          <div
            className="menu-icon"
            onClick={() => setMenuOpened((prev) => !prev)}
          >
            <BiMenuAltRight size={30} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Head;
