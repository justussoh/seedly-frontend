import React from "react";
import {LinkContainer} from 'react-router-bootstrap'
import {Container, Row, ListGroup, Nav} from "react-bootstrap";

class TopicBar extends React.Component {

    render() {
        return (
            <Container>
                <Nav className="flex-column">
                    <LinkContainer exact to="/"
                                   activeStyle={{
                                       fontWeight: "bold",
                                       color: "red"
                                   }}>
                        <Nav.Item>All Questions</Nav.Item>
                    </LinkContainer>
                    <Nav.Item disabled>Featured Topics</Nav.Item>

                    {this.props.topicList.map((topic, index) => {
                        return (
                            <LinkContainer to={`/topic/${topic.key}`} key={index}
                                           activeStyle={{
                                               fontWeight: "bold",
                                               color: "red"
                                           }}>
                                <Nav.Item>{topic.label}</Nav.Item>
                            </LinkContainer>
                        )
                    })}
                </Nav>
            </Container>
        )
    }
}

export default TopicBar