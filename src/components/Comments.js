import React, {Component} from 'react';
import './Comments.css';

import PublishMessage from './PublishMessage';
import Messageboard from './Messageboard';



//we can use the publish msg function

class Comments extends Component{
   

    render(){

    return (
        <div className="CommentSection">
            <h1 className="CommentTitle">Want to Leave a Comment ? </h1>

            <hr />
            <PublishMessage />
            <hr />
            <Messageboard />


        </div>

      

    )
    }
}



export default Comments;