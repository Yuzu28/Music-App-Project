import React, {Component} from 'react';
import './Comments.css';

import { PubSubContext } from '../pubsub';
import { newMessage } from '../actions/messages';
import { connect } from 'react-redux';

// import Messageboard from './Messageboard';

// {element.id.videoId?
//     <iframe className="vids" title="musicVideos" width="350" height="250" src={`https://www.youtube.com/embed/${element.id.videoId}`} frameBorder="2" allowFullScreen></iframe>
//     : ""
// }

//we can use the publish msg function

class PublishMessage extends Component{
    state = { text: ''};

    updateText = (event) => this.setState({text: event.target.value});

    publishMessage = () => {
        const { text } = this.state;
        const { username } = this.props;

        if (this.state.text ==="") return alert("Comment Box Can not be Left Blank 😤!!!!");
        this.context.pubsub.publish(newMessage( {text: this.state.text, username }));

    }

    handleKeyPress = (ele) =>{
        if (ele.key === 'Enter') this.publishMessage();
    }

    render(){
    console.log('this', this);

    return (
        <div className="CommentSection2">
        {/* <h1 className="CommentTitle">Want to Leave a Comment ? </h1> */}
        <input className="comentbutton" onChange={this.updateText} onKeyPress={this.handleKeyPress} placeholder="Leave a Comment...." />
        {' '}
        <button className="buttoncomment" onClick={this.publishMessage}>Comment</button>

        {/* {Messageboard} */}

        </div>

    )
    }
    static contextType = PubSubContext;
}

PublishMessage.contextType = PubSubContext;


export default connect(({username}) =>({ username }))(PublishMessage);





