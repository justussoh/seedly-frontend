import React from "react";
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import IconButton from '@material-ui/core/IconButton';


class ShareButton extends React.Component {

    render() {
        return (
            <IconButton>
                <ShareOutlinedIcon style={{marginRight:6, color:'#9AA1B3'}}/>
            </IconButton>
        )
    }
}

export default ShareButton