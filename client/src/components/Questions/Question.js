import React from "react";
import {Col, Container, Row} from "react-bootstrap";

class Question extends React.Component {

    componentDidMount() {
        console.log(this.props.match.params.topic)
    }

    render() {
        return (
            <div>
                <h1>Hello</h1>
            </div>
        )
    }
}

export default Question