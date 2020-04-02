import React from "react";
import {Card} from "react-bootstrap"
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
            <Card>
                <CategoryComponent topics={question.category}/>
                <Card.Title>{question.title}</Card.Title>
                <div>
                    <UserComponent userId={question.userId}/>
                    <TimeComponent timeAnswered={question.answerTime} />
                </div>
                <ContentComponent description={question.description}/>
                <div>
                    <AnswerComponent answer={question.answer}/>
                    <LikeComponent likes={question.likes}/>
                    <ShareButton/>
                </div>
            </Card>
        )
    }
}

export default Question