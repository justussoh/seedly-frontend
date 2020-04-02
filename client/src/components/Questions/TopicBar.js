import React from "react";
import {LinkContainer} from 'react-router-bootstrap'
import {Container, Nav} from "react-bootstrap";
import './TopicBar.css'

class TopicBar extends React.Component {

    render() {
        return (
            <Container>
                <Nav className="flex-column">
                    <div className='list-item-container' style={{marginBottom: 10}}>
                        <LinkContainer exact to="/">
                            <Nav.Item className='list-item list-item-text list-item-text-hover'>All Questions</Nav.Item>
                        </LinkContainer>
                    </div>
                    <div className="list-item-container">
                        <Nav.Item disabled className='list-item list-item-text' style={{fontWeight: 'bold'}}>Featured
                            Topics</Nav.Item>
                        {this.props.topicList.map((topic, index) => {
                            return (

                                <LinkContainer to={`/topic/${topic.key}`}>
                                    <Nav.Item className='list-item list-item-text list-item-text-hover'>{topic.label}</Nav.Item>
                                </LinkContainer>
                            )
                        })}
                    </div>
                </Nav>
            </Container>
        )
    }
}

export default TopicBar