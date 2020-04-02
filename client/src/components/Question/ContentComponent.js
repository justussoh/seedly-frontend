import React from "react";
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
            <div>
                <Truncate
                    lines={!this.state.expanded && 3}
                    ellipsis={(
                        <span>... <a href='#' onClick={this.toggleLines}>(more)</a></span>
                    )}
                    onTruncate={this.handleTruncate}
                >
                    {this.props.description.split('\n').map((line, i, arr) => {
                        let new_line = <span key={i}>{line}</span>;

                        if (i === arr.length - 1) {
                            return new_line;
                        } else {
                            return [new_line, <br key={i + 'br'} />];
                        }
                    })}
                </Truncate>
                {!this.state.truncated && this.state.expanded && (
                    <span> <a href='#' onClick={this.toggleLines}>(less)</a></span>
                )}
            </div>
        )
    }
}

export default ContentComponent