
import { combineReducers } from 'redux';
import messagesReducers from './messages';

export default combineReducers({
    messages: messagesReducers
});


