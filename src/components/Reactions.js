import React, {Component} from 'react';
import { REACTION_OBJECTS } from '../actions/types';

class Reactions extends Component {
    render(){
        return (
            <div>
                {
                    REACTION_OBJECTS.map( REACTION_OBJECTS =>{
                        //destruturing
                        const { type, emoji} = REACTION_OBJECTS

                        return(
                        <span style={{margin: 5, cursor: 'pointer'}} key={type}>
                        {emoji}
                        </span>
                        )
                    }) 
                }
            </div>
        )
    }
}

export default Reactions;