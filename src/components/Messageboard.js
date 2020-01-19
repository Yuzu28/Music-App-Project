import React from 'react';
import { connect } from 'react-redux';

const Messageboard = ({ messages }) => {
    return (
        <div>
            {
              messages.items.map(messageItem => {
                  const { id, text, timestamp } = messageItem;
    
               return (
                   <div className="msgboard" key={id}>
                   <h4 className="msgTime">{new Date(timestamp).toLocaleString()}</h4>
                   <p className="msgText">{text}</p>
                   
                   </div>
                   )
                })
            }
        </div>
    )
   }


export default connect(
    ({ messages }) => ( { messages })
)(Messageboard);


// if (!messages) return null


