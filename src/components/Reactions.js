import React, {Component} from 'react';
import { connect } from 'react-redux';
import { REACTION_OBJECTS } from '../actions/types';
import { createReactions} from '../actions/reactions';
import { PubSubContext } from '../pubsub';

class Reactions extends Component {
    publishReaction = ({ type, emoji}) => () =>{
        const { username, messageId } = this.props
        this.context.pubsub.publish(createReactions({ type, emoji, username, messageId }));

    }


    render(){
        return (
            <div>
                {
                    REACTION_OBJECTS.map( REACTION_OBJECTS =>{
                        //destruturing
                        const { type, emoji} = REACTION_OBJECTS

                        return(
                        <span style={{margin: 5, cursor: 'pointer'}} key={type}
                        onClick={this.publishReaction({type, emoji})}
                        
                        >

                        {emoji}
                        </span>
                        )
                    }) 
                }
            </div>
        )
    }
    static contextType = PubSubContext;
}

export default connect(({username}) =>({username}))(Reactions);








