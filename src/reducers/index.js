
import { combineReducers } from 'redux';
import messagesReducers from './messages';
import usernameReducers from './username';

export default combineReducers({
    messages: messagesReducers,
    username: usernameReducers
});


