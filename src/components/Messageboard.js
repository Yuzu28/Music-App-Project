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

                if (text === ""){
                    return  console.log("hello")

                    
                }

                else {
            
               return (
                   <div className="msgboard" key={id}>
                   <h4 className="msgTime">{new Date(timestamp).toLocaleString()}</h4>
                   <p className="msgText">{text}</p>
                   <h4 className="msgUsername"> - {username}</h4>
                   <Reactions messageId={id}/>
                   <MessageReactions MessageReactions={reactions[id]} />
                   </div>
                   )
               }
                })
            }
        </div>
    )
        
   }


export default connect(
    ({ messages, reactions }) => ( { messages, reactions })
)(Messageboard);


// if (!messages) return null


