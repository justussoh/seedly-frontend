import React from "react";
import {Card} from "react-bootstrap";
import Truncate from 'react-truncate';

class ContentComponent extends React.Component {

    state = {
        expanded: false,
        truncated: false
    };

    handleTruncate = (truncated) => {
        if (this.state.truncated !== truncated) {
            this.setState({
                truncated
            });
        }
    };

    toggleLines = (event) => {
        event.preventDefault();
        this.setState({
            expanded: !this.state.expanded
        });
    };

    render() {
        return (
            <Card.Text>
                <Truncate
                    lines={!this.state.expanded && 3}
                    ellipsis={(
                        <span>... <a href='#' onClick={this.toggleLines}>(more)</a></span>
                    )}
                    onTruncate={this.handleTruncate}
                >
                    {this.props.description}
                </Truncate>
                {!this.state.truncated && this.state.expanded && (
                    <span> <a href='#' onClick={this.toggleLines}>(less)</a></span>
                )}
            </Card.Text>
        )
    }
}

export default ContentComponent