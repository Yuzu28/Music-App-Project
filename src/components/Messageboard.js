import React from 'react';
import { connect } from 'react-redux';

const Messageboard = ({ messages }) => {
    if (!messages) return null;

    
    return (

        <div>
            {
              messages.items.map(messageItem => {
                  const { id, text, timestamp } = messageItem;

                if (text === ""){
                    return  console.log("hello")

                    
                }

                else {
            
               return (
                   <div className="msgboard" key={id}>
                   <h4 className="msgTime">{new Date(timestamp).toLocaleString()}</h4>
                   <p className="msgText">{text}</p>
                   
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


