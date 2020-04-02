import React from "react";
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';


class LikeComponent extends React.Component {

    render() {
        return (
            <div>
                <ThumbUpAltOutlinedIcon/>
                <h6>{this.props.likes.length}</h6>
            </div>
        )
    }
}

export default LikeComponent