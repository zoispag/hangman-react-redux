import React, { Component } from 'react';
import './Hangman.css';
import HangmanIcon from './components/HangmanIcon';
import HangmanWord from './components/HangmanWord';
import HangmanLetters from './components/HangmanLetters';
import HangmanMessage from './components/HangmanMessage';

class Hangman extends Component {
  render() {
    const word = 'developer';
    const letters = ['d', 'a', 'v', 'z', 'b'];
    const status = letters.filter(letter => !word.split('').includes(letter)).length;
    return (
      <div className="Hangman">
        Hello Hangman!
        <HangmanIcon status={status} />
        <HangmanWord word={word} letters={letters} />
        <HangmanLetters used={letters} />
        <HangmanMessage message='Please select a letter..' status={status} />
      </div>
    );
  }
}

export default Hangman;
