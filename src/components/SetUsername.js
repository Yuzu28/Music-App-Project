import React from 'react';
import { connect } from 'react-redux';

import { setUsername } from '../actions/username';

const SetUsername = ({ setUsername }) => {
    return (
        <div>
            <span className="setUsers">Username: </span>
            <input className="enterMe" onChange={setUsername} placeholder="Enter a name or Stay Anonymous..."></input>
        </div>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        setUsername: event => dispatch(setUsername(event.target.value))
    }
}

export default connect(null, mapDispatchToProps)(SetUsername)
