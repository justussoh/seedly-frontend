import React from "react";
import {Button, Container} from "react-bootstrap";

class Header extends React.Component {
    render() {
        return (
            <Container fluid style={{height:'35vh'}} className='d-flex flex-column align-items-center justify-content-center'>
                <h1>Let's Talk Finance</h1>
                <h6>Ask for opinions and get answers from other Singaporeans.</h6>
                <Button size="lg">ASK A QUESTION</Button>
            </Container>
        )
    }
}

export default Header
