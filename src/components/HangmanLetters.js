import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './HangmanLetters.css';

class HangmanLetters extends Component {
  static propTypes = {
      letters: PropTypes.arrayOf(PropTypes.string),
      handleLetter: PropTypes.func.isRequired,
      gamehasEnded: PropTypes.bool.isRequired
  }

  static allLetters = [
      'a', 'b', 'c', 'd', 'e', 'f',
      'g', 'h', 'i', 'j', 'k', 'l',
      'm', 'n', 'o', 'p', 'q', 'r',
      's', 't', 'u', 'v', 'w', 'x',
      'y', 'z'
  ]

  render () {
    const { letters, handleLetter } = this.props;
    const letterButtons = HangmanLetters.allLetters.map(letter => (
      <button
        type="button"
        className={`HangmanLetter${ letters.includes(letter) || this.props.gamehasEnded ? ' disabled' : '' }`}
        disabled={letters.includes(letter) || this.props.gamehasEnded}
        key={letter}
        name={letter}
        onClick={() => handleLetter(letter)}
      >{letter.toUpperCase()}</button>
    ));
    return (<div className="HangmanLetters">
              {letterButtons}
            </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
    handleLetter: (letter) => (dispatch({type: "HANDLE_LETTER", letter: letter}))
});

export default
    connect(null, mapDispatchToProps)(HangmanLetters);