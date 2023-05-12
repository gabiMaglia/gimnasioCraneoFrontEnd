import React, { useState } from "react";
import { Button } from "react-bootstrap";
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
    <nav
      id="nav-bar"
      className="navbar navbar-expand-xl navbar-dark bg-dark fixed-top navbar-scroll"
    >
      <div className="holder container">
        <div className="banner ms-5" title="Gimnasio Craneo">
          <span className="mainLogo">GIMNASIO CRANEO</span>
        </div>
        <button
          className="navbar-toggler btn btn-secondary me-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navBarMenu"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <Navbar.Collapse
          className="collapse navbar-collapse me-5"
          id="navBarMenu"
        >
          <Nav className="navbar-nav">
            <li className="nav-item">
              <Nav.Link href="#homepage" className="button" title="Inicio">
                INICIO
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link href="#nosotros" className="button" title="Nosotros">
                NOSOTROS
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link
                href="#actividades"
                className="button"
                title="Que hacemos"
              >
                QUE HACEMOS
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link href="#contacto" className="button" title="Contacto">
                CONTACO
              </Nav.Link>
            </li>
            <li className="nav-item">
              <i
                onClick={() => {
                  openModal();
                }}
                className="button logBtn"
                title="Login"
              >
                LOGIN
              </i>
            </li>
            <Nav.Link
              className="socialMedia button "
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
      </div>
    </nav>
  );
}

export default NavBar;
