import React from "react";
import Link from "next/link";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

// Core Components

function NavbarInfo() {
 
  return (
    <>
      <Navbar className="navbar-dark bg-dark" expand="lg">
        <Container>
        <NavbarBrand  href="https://nextjs.org/"  target="_blank">
            Nextjs
          </NavbarBrand>
          <Collapse  navbar>
            
           
            <Nav className="ml-auto" navbar>
            <NavItem>
                  <Link href='/'>
                    <NavLink >
                      <span className="nav-link-inner--text">Home</span>
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href='/about'>
                    <NavLink >
                      <span >About</span>
                    </NavLink>
                  </Link>
                </NavItem>
      
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarInfo;
