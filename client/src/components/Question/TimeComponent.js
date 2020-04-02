import React from "react";

class TimeComponent extends React.Component {

    render() {
        return (
            <div>
                <h6>{this.props.timeAnswered}</h6>
            </div>
        )
    }
}

export default TimeComponent