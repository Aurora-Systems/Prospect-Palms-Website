import { FC } from "react";
import { Button, Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";

export const TopNavbar:FC=()=>{
    return(
        <Navbar collapseOnSelect  expand="sm" className="container-fluid">
            <Container>
                <NavbarBrand>
                    <img className="Sirv" width="40" data-src="https://ellatean.sirv.com/website/plogo.png" alt="" />
                    &nbsp;Prospect Palms
                </NavbarBrand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href="">Home</Nav.Link>
                        <Nav.Link href="">About</Nav.Link>
                        <Nav.Link href="">Services</Nav.Link>
                        <Nav.Link href="">Blog</Nav.Link>
                        <Nav.Link href="">FAQs</Nav.Link>
                        <Nav.Link href="">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                    <Button><a className="text-white" href="tel:+263782226696">Call Us</a></Button>
            </Container>
            
        </Navbar>
    )
}