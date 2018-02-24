import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hangman from './Hangman';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Hangman />, document.getElementById('root'));
registerServiceWorker();
