import React from "react";

const SECONDS = 1000;
const MINUTES = SECONDS * 60;
const HOURS = MINUTES * 60;
const DAYS = HOURS * 24;
const WEEKS = DAYS * 7;
const MONTHS = WEEKS * 4;
const YEARS = MONTHS * 12;


class TimeComponent extends React.Component {

    getTimeString = (timeAnswered) => {
        let diff = Math.abs(new Date() - Date.parse(timeAnswered));
        if (diff < HOURS) {
            return `${Math.ceil(diff / MINUTES)}m`
        } else if (diff < DAYS) {
            return `${Math.floor(diff / HOURS)}h`
        } else if (diff < WEEKS) {
            return `${Math.floor(diff / DAYS)}d`
        } else if (diff < MONTHS) {
            return `${Math.floor(diff / WEEKS)}w`
        } else if (diff < YEARS) {
            return `${Math.floor(diff / MONTHS)}mth`
        } else{
            return `${Math.floor(diff / YEARS)}y`

        }
    };

    render() {
        return (
            <div className='d-flex flex-column-reverse' >
                <div className='time-text'>Answered {this.getTimeString(this.props.timeAnswered)} ago</div>
            </div>
        )
    }
}

export default TimeComponent