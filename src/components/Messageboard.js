import React from 'react';
import { connect } from 'react-redux';
import Reactions from './Reactions';

const Messageboard = ({ messages }) => {
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
                   <Reactions />
                   </div>
                   )
               }
                })
            }
        </div>
    )
        
   }


export default connect(
    ({ messages }) => ( { messages })
)(Messageboard);


// if (!messages) return null


