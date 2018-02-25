import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import './index.css';
import Hangman from './Hangman';
import registerServiceWorker from './registerServiceWorker';

var randomWords = require('random-words');

const state = {
    word: randomWords(),
    letters: []
};

const store = createStore(rootReducer, state);

ReactDOM.render(
    <Provider store={store}>
        <Hangman />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
