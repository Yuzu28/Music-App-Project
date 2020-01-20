
import { combineReducers } from 'redux';
import messagesReducers from './messages';
import usernameReducers from './username';
import reactionsReducer from './reactions';

export default combineReducers({
    messages: messagesReducers,
    username: usernameReducers,
    reactions: reactionsReducer
});


