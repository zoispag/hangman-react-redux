import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HangmanMessage.css';

class HangmanMessage extends Component {
  static propTypes = {
    conditionIndex: PropTypes.number.isRequired,
    word: PropTypes.string.isRequired
  }

  render () {
    const gameCondition = [
      ['Please select a letter..', 'inGame'],
      ['Congrats, you won!', 'wonGame'],
      [`Game over! The word was "${this.props.word}"`, 'lostGame'],
    ]

    const gameStatus = gameCondition[this.props.conditionIndex];
    return (<div>
              <p
                className={`HangmanMessage ${gameStatus[1]}`}
              >{gameStatus[0]}</p>
            </div>);
  }
}

export default HangmanMessage;