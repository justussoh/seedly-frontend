import React from "react";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';


class AnswerComponent extends React.Component {

    render() {
        return (
            <div>
                <ChatBubbleOutlineIcon/>
                <h6>{this.props.answer.length} answer{this.props.answer.length > 1 ? 's': ''}</h6>


            </div>
        )
    }
}

export default AnswerComponent