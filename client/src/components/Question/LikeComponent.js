import React from "react";
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';


class LikeComponent extends React.Component {

    render() {
        return (
            <div className='d-flex flex-row align-items-center justify-content-center' style={{marginRight:6}}>
                <ThumbUpAltOutlinedIcon style={{marginRight:6, color:'#9AA1B3'}}/>
                <div style={{fontWeight: 'bold', fontSize: 12, color:'#9AA1B3'}}>{this.props.likes.length}</div>
            </div>
        )
    }
}

export default LikeComponent