import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import './pubsub';
import PubSub, { PubSubContext } from './pubsub';
import { newMessage } from './actions/messages';


//for redux
//Step 1 organization
import { Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './reducers';

const store = createStore(rootReducer,
    window.window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
    );

console.log('store.getState()', store.getState());

store.subscribe(() =>console.log('store.getState()', store.getState()));

const pubsub = new PubSub();

pubsub.addListener({
    message: messageObject => {
        const { message, channel } = messageObject;

        console.log('Received message:', message, 'channel:', channel);

        store.dispatch(message);
    }
})

setTimeout(() => {
    pubsub.publish(newMessage( {text:'"Inferno" by Mrs green apple is a pretty good song XD' , username:'Yuu Haruno'}));

}, 1000);

ReactDOM.render(

<Provider store={store}>
    <PubSubContext.Provider value={{ pubsub }}>
        <App />

    </PubSubContext.Provider>

</Provider>
    
    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
