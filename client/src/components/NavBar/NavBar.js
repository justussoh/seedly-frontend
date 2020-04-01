import React from "react";
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'

class NavBar extends React.Component {
    render() {
        return (
            <Navbar bg="light">
                <Navbar.Brand href="/">
                    <img alt='logo' src={'/images/logo.png'} style={{height:40, width:'auto'}}/>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Ask Community</Nav.Link>
                    <Nav.Link href="/">Products</Nav.Link>
                    <Nav.Link href="/">Content</Nav.Link>
                    <Nav.Link href="/">Events</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search for a topic or ask a question" className="mr-sm-2"/>
                    <Button variant="outline-info">Join</Button>
                </Form>
            </Navbar>
        )
    }
}

export default NavBar