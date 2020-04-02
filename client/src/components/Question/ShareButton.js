import React from "react";
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import IconButton from '@material-ui/core/IconButton';


class ShareButton extends React.Component {

    render() {
        return (
            <IconButton>
                <ShareOutlinedIcon/>
            </IconButton>
        )
    }
}

export default ShareButton