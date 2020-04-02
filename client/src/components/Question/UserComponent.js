import React from "react";
import axios from 'axios';

class UserComponent extends React.Component {

    state={
        user:{},
        levelLabel:'',
    };

    componentDidMount() {
        axios.get(`/api/userId?userId=${this.props.userId}`)
            .then(res => {
                this.setState({user:res.data.users[0]})
            })
        axios.get(`/api/level_list`)
            .then(res => {
                const label = res.data.levels.filter(level=>level.level === this.state.user.level);
                this.setState({levelLabel:label[0].label})
            })
    }

    render() {
        return (
            <div>
                <h6>{this.state.user.displayName}</h6>
                <h6>Level {this.state.user.level}, {this.state.levelLabel}</h6>
            </div>
        )
    }
}

export default UserComponent