import React from "react";
import {ListGroup, Container, Row} from "react-bootstrap";
import {withRouter} from "react-router-dom";
import axios from 'axios';
import Question from "../Question/Question";
import './Questions.css';

class Questions extends React.Component {

    state = {
        statusList: [],
        currentStatus: 'recent_activity',
        questions: [],
    };

    componentDidMount() {
        axios.get(`/api/status_list`)
            .then(res => {
                const statuses = res.data.statuses;
                this.setState({statusList: statuses});
            });
        this.fetchQuestions(this.props.match.params.topic)
    };

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.match.params.topic !== this.props.match.params.topic) {
            this.fetchQuestions(nextProps.match.params.topic)
        }
    }

    fetchQuestions = (topic) =>{
        axios.get(`/api/questions`)
            .then(res => {
                let questions = res.data.questions;
                if (this.props.match.params.topic) {
                    // Normally this should be done on the backend under a query param, but shifted to frontend due to mocking of API data
                    questions = this.filterByCategory(questions, topic)
                }
                this.setState({questions: questions});
            });
    };

    filterByCategory = (questions, category) => {
        const res = [];
        for (let question of questions) {
            if (question.category && question.category.includes(category)) {
                res.push(question)
            }
        }
        return res
    };

    filterByStatus = (questions, status) => {
        const res = [];
        for (let question of questions) {
            if (question.status && question.status.includes(status)) {
                res.push(question)
            }
        }
        return res
    };

    handleStatusClick = (status) => {
        this.setState({currentStatus: status})
    };

    render() {
        const filtered_questions = this.filterByStatus(this.state.questions, this.state.currentStatus);

        return (
            <Container>
                <Row>
                    <div className='status-container'>
                        {
                            this.state.statusList.map((status, index) => {
                                return (
                                    <div key={index}
                                                    onClick={() => {
                                                        this.handleStatusClick(status.key)
                                                    }}
                                                    className={this.state.currentStatus === status.key? 'status-text status-text-blue':'status-text status-text-gray'}
                                    >
                                        {status.label}
                                    </div>
                                )
                            })
                        }
                    </div>
                </Row>
                <Row>
                    {filtered_questions.map((question, index) => {
                        return (
                            <Question key={index}  question={question}/>
                        )
                    })}
                </Row>
            </Container>
        )
    }
}

export default withRouter(Questions)