import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

function Navegacion() {
     return (
          <Container className="mt-3">
               <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand><Link to="/">React PostgreSQL App</Link> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                         <Nav className="mr-auto">
                              <Link className="nav-link" to="/customers">Customers</Link>
                              <Link className="nav-link" to="/actors">Actors</Link>
                              <Link className="nav-link" to="/films">Films</Link>
                         </Nav>
                         <Nav>
                              <Nav.Link href="#"> Log In </Nav.Link>
                         </Nav>
                    </Navbar.Collapse>
               </Navbar>
          </Container>

     );
}

export default Navegacion;
