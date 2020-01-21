import React from 'react';
import { connect } from 'react-redux';
import Reactions from './Reactions';

const MessageReactions = ( { MessageReactions }) => {


    if (!MessageReactions) return null;

    return (
        MessageReactions.map((reaction, index) => {
            const { id, emoji, username } = reaction;

            return (
                <span key={id}>
                    <em>{username}:</em>{' '}
                     {emoji}
                     {index !== MessageReactions.length -1 ? ', ': null}
                
                </span>
            )
        })
    )

}

const Messageboard = ({ messages, reactions }) => {
    if (!messages) return null;


    return (


        <div>
            {
              messages.items.map(messageItem => {


                  const { id, text, timestamp, username } = messageItem;

              
               
            
               return (
                   <div className="container msgboard" key={id}>
                        <div className="row">
                        <div className="col msgTimeContainer">
                        <h4 className="msgTime">{new Date(timestamp).toLocaleString()}</h4>
                        </div>
                        </div>

                        <div className="row">
                        
                        <div className="col-3 sss"> 
                        <div className="Imgandcomment">
                        <span><img  className="commentImg" src={process.env.PUBLIC_URL + `/thumbnails/1.jpg`} height="100%" width="60%" alt="gameImage"/></span>  
                        <h4 className="msgUsername"> - {username}</h4> 
                        </div>
                        
                        </div>

                        
                        <div className="col righter"> <p className="msgText">{text}</p>  
                        <hr className="new1" />

                        <Reactions messageId={id}/>
                        <MessageReactions MessageReactions={reactions[id]} />   
                        </div>
                        </div>   
                   </div>
                   )}

                )
            }
        </div>
    )
        
   }


export default connect(
    ({ messages, reactions }) => ( { messages, reactions })
)(Messageboard);


// if (!messages) return null


