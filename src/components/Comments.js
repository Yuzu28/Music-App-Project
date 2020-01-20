import React, {Component} from 'react';
import './Comments.css';

import PublishMessage from './PublishMessage';
import Messageboard from './Messageboard';
import SetUsername from './SetUsername';



//we can use the publish msg function

class Comments extends Component{
   

    render(){

    return (
        <div className="CommentSection">
            <h1 className="CommentTitle">Want to Leave a Comment ? </h1>
            <SetUsername />
            <hr />
            <PublishMessage />
            <hr />
            <Messageboard/>


        </div>

      

    )
    }
}



export default Comments;