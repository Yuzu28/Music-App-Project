import React, {Component} from 'react';
import './Comments.css';

import { PubSubContext } from '../pubsub';
import { newMessage } from '../actions/messages';



//we can use the publish msg function

class Comments extends Component{
    state = { text: ''};

    updateText = (event) => this.setState({text: event.target.value});

    publishMessage = () => {
        this.context.pubsub.publish(newMessage(this.state.text));

    }

    handleKeyPress = (ele) =>{
        if (ele.key === 'Enter') this.publishMessage();
    }

    render(){
    console.log('this', this);

    return (
        <div className="CommentSection">
        <h1 className="CommentTitle">Want to Leave a Comment ? </h1>
        <input onChange={this.updateText} onKeyPress={this.handleKeyPress} />
        {' '}
        <button onClick={this.publishMessage}>Comment</button>

        </div>

    )
    }
    static contextType = PubSubContext;
}

Comments.contextType = PubSubContext;


export default Comments;