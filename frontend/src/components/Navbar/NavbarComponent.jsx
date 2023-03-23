import React, { useEffect, useState } from "react";
import "./NavbarComponent.scss";
import { Link } from "react-router-dom";

import {
  Container,
  Nav,
  Navbar,
  Col,
  Stack,
  Button,
  Offcanvas,
} from "react-bootstrap";

import { FaDiscord, FaEnvelope, FaPhone } from "react-icons/fa";
import { client, urlFor } from "../../client";

const NavbarComponent = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const query = '*[_type=="navbarInfo"]';

    client.fetch(query).then((info) => setData(info));
  }, []);

  return (
    <>
      <Navbar
        key="lg"
        bg="info"
        expand="lg"
        className="app__navbar-bg"
        sticky="top"
      >
        {data.map((navbar, index) => (

        
        <Container fluid key={index}>

          <Col>
            <Navbar.Brand href="/" className="app__navbar-logo app__header-font-variant app__flexCenter">
              <img src={urlFor(navbar.image)} alt={navbar.header} loading='lazy'/>
            </Navbar.Brand>
          </Col>

          <Col className="app__flexCenter app__navbar-col2">
            <div>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-lg`}
                className="navbar-right"
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-lg`}
                aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`} className="h3">
                    {navbar.header}
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Stack gap="3" direction="horizontal" className="app__paragraph-text" id="offcanvas-links">
                      <Link to={"/"}>Home</Link>
                      <Link to={"/About"}>About</Link>
                      {/* <Link to={"/Blog"}>Blog</Link> */}
                      <Link to={"/Services"}>Services</Link>
                      <Link to={"/Contact"}>Contact</Link>
                    </Stack>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </div>

            <div className="app__navbar-socials">
              <a
                href="mailto:jjlagoutaris@gmail.com"
              >
                <Button variant="light">
                  <FaEnvelope/>
                </Button>
              </a>
              <a
                href="https://discordapp.com/users/299034964106674177"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="light">
                  <FaDiscord />
                </Button>
              </a>
              <a
                href="tel:+1 (508) 733-5214"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="light">
                  <FaPhone />
                </Button>
              </a>
            </div>
            
          </Col>
          
        </Container>
        ))}
      </Navbar>
    </>
  );
};

export default NavbarComponent;
