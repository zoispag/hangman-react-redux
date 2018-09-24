import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './HangmanReset.css';

class HangmanReset extends Component {
	static propTypes = {
    resetGame: PropTypes.func.isRequired,
  }

  render () {
    const { resetGame } = this.props;
    return (<button className="rst-btn" onClick={() => resetGame()}>New Game</button>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  resetGame: () => (dispatch({type: "RESET_GAME"}))
});

export default
  connect(null, mapDispatchToProps)(HangmanReset);