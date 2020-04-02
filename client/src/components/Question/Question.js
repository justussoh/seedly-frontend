import React from "react";
import {Card} from "react-bootstrap"
import './Question.css'
import CategoryComponent from "./CategoryComponent";
import AnswerComponent from "./AnswerComponent";
import LikeComponent from "./LikeComponent";
import ShareButton from "./ShareButton";
import ContentComponent from "./ContentComponent";
import UserComponent from "./UserComponent";
import TimeComponent from "./TimeComponent";

class Question extends React.Component {

    render() {
        const {question} = this.props;
        return (
            <div className='question-card'>
                <CategoryComponent topics={question.category}/>
                <div className='question-title'>{question.title}</div>
                <div className='d-flex'>
                    <UserComponent userId={question.userId}/>
                    <TimeComponent timeAnswered={question.answerTime} />
                </div>
                <ContentComponent description={question.description}/>
                <div>
                    <AnswerComponent answer={question.answer}/>
                    <LikeComponent likes={question.likes}/>
                    <ShareButton/>
                </div>
            </div>
        )
    }
}

export default Question