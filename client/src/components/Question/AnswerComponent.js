import React from "react";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';


class AnswerComponent extends React.Component {

    render() {
        return (
            <div className='d-flex align-items-center justify-content-center'>
                <ChatBubbleOutlineIcon style={{marginRight:6, color:'#9AA1B3'}}/>
                <div style={{fontWeight: 'bold', fontSize: 12, color:'#9AA1B3'}}>{this.props.answer.length} answer{this.props.answer.length > 1 ? 's': ''}</div>
            </div>
        )
    }
}

export default AnswerComponent