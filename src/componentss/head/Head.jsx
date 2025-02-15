import AuthPage from "../AuthPage/AuthPage";
import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
import "./Head.css";
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import OutsideClickHandler from "react-outside-click-handler";
import { BiMenuAltRight } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

function Head() {
  const [MenuOpened, setMenuOpened] = useState(false);
  const [isAuthDropdownOpen, setIsAuthDropdownOpen] = useState(false);
  const location = useLocation(); // Get the current URL path

  // Function to determine active link
  const isActive = (path) => location.pathname === path;

  const getMenuStyles = (MenuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !MenuOpened && "-100%" };
    }
  };

  return (
    <>
      <section className="h-wrapper sticky-navbar">
        <div className="flexCenter paddings innerwidth h-container">
          <Navbar.Brand href="/Home">
            <Link to="/Home">
              <img
                src="./flogo.png"
                alt="logo"
                width={160}
                height={100}
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
              <Nav.Link href="/Home">
                <Link
                  to="/"
                  className={isActive("/") ? "active-nav" : ""}
                  style={{ textDecoration: "none" }}
                >
                  Home
                </Link>
              </Nav.Link>

              <Nav.Link href="/Aboutus">
                <Link
                  to="/Aboutus"
                  className={isActive("/Aboutus") ? "active-nav" : ""}
                  style={{ textDecoration: "none" }}
                >
                  About Us
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Dropdown as={NavItem}>
                  <Dropdown.Toggle as={NavLink}>
                    <Link
                      to="/MainServices"
                      className={isActive("/MainServices") ? "active-nav" : ""}
                      style={{ textDecoration: "none" }}
                    >
                      Services
                    </Link>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <NavDropdown.Item>
                      <Link
                        to="/Residential"
                        className={isActive("/Residential") ? "active-nav" : ""}
                        style={{ color: "Black" }}
                      >
                        Residential
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link
                        to="/Commercial"
                        className={isActive("/Commercial") ? "active-nav" : ""}
                        style={{ color: "Black" }}
                      >
                        Commercial
                      </Link>
                    </NavDropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link>

              <Nav.Link href="Vendors">
                <Link
                  to="/Vendors"
                  className={isActive("/Vendors") ? "active-nav" : ""}
                  style={{ textDecoration: "none" }}
                >
                  Vendors
                </Link>
              </Nav.Link>

              <Nav.Link href="Store">
                <Link
                  to="/Store"
                  className={isActive("/Store") ? "active-nav" : ""}
                  style={{ textDecoration: "none" }}
                >
                  Store
                </Link>
              </Nav.Link>

          <Nav.Link>
            <Dropdown
              as={NavItem}
              show={isAuthDropdownOpen}
              onToggle={() => setIsAuthDropdownOpen(!isAuthDropdownOpen)}
            >
              <Dropdown.Toggle as={NavLink}>
                <span
                  className={isActive("/User") || isAuthDropdownOpen ? "active-nav" : ""}
                  style={{ textDecoration: "none" }}
                >
                  User
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <div className="auth-dropdown">
                  <AuthPage onClose={() => setIsAuthDropdownOpen(false)} />
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Link>

          <button className="button">
            <Nav.Link href="">
              <Link
                to=""
                className={isActive("/Contactus") ? "active-nav" : ""}
                style={{ textDecoration: "none" }}
              >
                Contact Us
              </Link>
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

    </div >
      </section >
    </>
  );
}

export default Head;
