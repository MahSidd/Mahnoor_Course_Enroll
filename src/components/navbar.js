import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import navIcon1 from "../assests/img/nav-icon1.svg";
import navIcon2 from "../assests/img/nav-icon2.svg";
import navIcon3 from "../assests/img/nav-icon3.svg";
import profileAvatar from "../assests/img/profile.jpg"; // Import your avatar image here
import { useState, useEffect } from "react";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#ourCourses"
              className={
                activeLink === "courses" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("courses")}
            >
              Courses
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={
                activeLink === "about" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("about")}
            >
              About
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mahnoor-tariq-021249214/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://www.facebook.com/mahnoor.tariq.1401/">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://www.instagram.com/the_sidd_art?igsh=MTdzOTZ5ZmkzcHR4ZA==">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <Nav.Link
              href="#profile"
              className={
                activeLink === "profile" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("profile")}
            >
              <img
                src={profileAvatar}
                alt="Profile Avatar"
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
            </Nav.Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
