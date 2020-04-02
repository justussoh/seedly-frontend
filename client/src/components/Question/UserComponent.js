import React from "react";
import Avatar from '@material-ui/core/Avatar';
import './UserComponent.css'
import axios from 'axios';

class UserComponent extends React.Component {

    state = {
        user: {},
        levelLabel: '',
    };

    componentDidMount() {
        axios.get(`/api/userId?userId=${this.props.userId}`)
            .then(res => {
                this.setState({user: res.data.users[0], avatar: res.data.users[0].displayName[0]})
            });
        axios.get(`/api/level_list`)
            .then(res => {
                const label = res.data.levels.filter(level => level.level === this.state.user.level);
                this.setState({levelLabel: label[0].label})
            });
    }

    render() {
        return (
            <div className='d-flex flex-row align-items-end' style={{margin: '0px 10px 0px 4px'}}>
                <Avatar style={{margin: '4px 10px 4px 0px', height:32, width:32}}>{this.state.avatar}</Avatar>
                <div>
                    <div className='user-text'>{this.state.user.displayName}</div>
                    <div className='user-level-text'>Level {this.state.user.level}, {this.state.levelLabel}</div>
                </div>
            </div>
        )
    }
}

export default UserComponent