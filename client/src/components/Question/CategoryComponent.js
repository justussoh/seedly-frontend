import React from "react";
import axios from "axios";
import './CategoryComponent.css'

class CategoryComponent extends React.Component {

    state={
        labelsList: []
    };

    componentDidMount() {
        axios.get(`/api/topic_list`)
            .then(res => {
                const topicsList = res.data.topics;
                const labelsList = this.props.topics.reduce((arr, topic)=>{
                    const label = topicsList.filter(topicKey => topicKey.key === topic)[0].label;
                    arr.push(label);
                    return arr
                }, []);
                this.setState({ labelsList:labelsList });
            })
    }

    render() {
        return (
            <div className='category-container'>
                {this.state.labelsList.map((label, index)=>{
                    return (
                        <div key={index} className='category-tag'>{label}</div>
                    )
                })}
            </div>
        )
    }
}

export default CategoryComponent