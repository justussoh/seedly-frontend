import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import TopicBar from "./TopicBar";
import Question from "./Questions";
import axios from 'axios'

class QuestionsPage extends React.Component {

    state={
        topicList:[],
    };

    componentDidMount() {
        axios.get(`/api/topic_list`)
            .then(res => {
                const topics = res.data.topics;
                this.setState({ topicList:topics });
            })
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col xs={2}>
                        <TopicBar topicList={this.state.topicList}/>
                    </Col>
                    <Col xs={10}>
                        <Switch>
                            <Route exact path="/" component={Question}/>
                            <Route exact path="/topic/:topic" component={Question}/>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default QuestionsPage