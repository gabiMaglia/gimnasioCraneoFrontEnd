import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./nav.css";

import ModalLogIn from "../../common/modalLogin/ModalLogin";

function NavBar(props) {
  console.log(props.tipo);
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };

  return (
    <Navbar
      expand="xl"
      bg="dark"
      variant="dark"
      fixed="top"
      style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
    >
      <Navbar.Brand className="banner" title="Gimnasio Craneo">
        <span className="mainLogo">GIMNASIO CRANEO</span>
      </Navbar.Brand>
      <Navbar.Toggle className="toogle" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav ">
        <Nav className="ml-auto container">
          <Nav.Link href="#homepage" className="button" title="Inicio">
            INICIO
          </Nav.Link>
          <Nav.Link href="#nosotros" className="button" title="Nosotros">
            NOSOTROS
          </Nav.Link>
          <Nav.Link href="#actividades" className="button" title="Que hacemos">
            QUE HACEMOS
          </Nav.Link>
          <Nav.Link href="#contacto" className="button" title="Contacto">
            CONTACO
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              openModal();
            }}
            className="button logBtn"
            title="Login"
          >
            LOGIN
          </Nav.Link>

          <Nav.Link
            className="socialMedia button ms-auto "
            href="http://www.instagram.com/Gimnasio_Craneo"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <i className="icon-instagramnormal "></i>
          </Nav.Link>
        </Nav>
        <ModalLogIn show={showModal} setShow={setShowModal} />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
