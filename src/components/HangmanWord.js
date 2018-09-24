import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HangmanWord.css';

class HangmanWord extends Component {
  static propTypes = {
    word: PropTypes.string.isRequired,
    letters: PropTypes.arrayOf(PropTypes.string)
  }

  render () {
    const displayWord = this.props.word.split('').map(letter => (this.props.letters.includes(letter) ? letter : '_')).join(' ');
    return (<div className="HangmanWordContainer">
              <span className="HangmanWord">
                {displayWord}
              </span>
            </div>);
  }
}

export default HangmanWord;