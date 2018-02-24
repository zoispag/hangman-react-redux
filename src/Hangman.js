import React, { Component } from 'react';
import './Hangman.css';
import HangmanIcon from './components/HangmanIcon';
import HangmanWord from './components/HangmanWord';
import HangmanLetters from './components/HangmanLetters';
import HangmanMessage from './components/HangmanMessage';

class Hangman extends Component {

  constructor(props) {
    super(props);
    this.state = {
      word: this.getRandomWord(),
      letters: []
    };
    
    this.handleLetter = this.handleLetter.bind(this);
  }
  
  getRandomWord() {
    return this.props.availableWords[Math.floor(Math.random() * this.props.availableWords.length)];
  }
  
  handleLetter(letter) {
    const letters = [...this.state.letters, letter];
    this.setState({letters});
  }

  render() {
    const status = this.state.letters.filter(letter => !this.state.word.split('').includes(letter)).length;
    return (
      <div className="Hangman">
        Hello Hangman!
        <HangmanIcon status={status} />
        <HangmanWord word={this.state.word} letters={this.state.letters} />
        <HangmanLetters letters={this.state.letters} onClick={this.handleLetter} />
        <HangmanMessage status={status} />
      </div>
    );
  }
}

Hangman.defaultProps = {
  availableWords: ['developer', 'fideloper']
}

export default Hangman;
