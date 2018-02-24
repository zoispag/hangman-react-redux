import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HangmanMessage.css';

class HangmanMessage extends Component {
    static propTypes = {
        status: PropTypes.number.isRequired
    }

    render () {
        const gameCondition = [
            ['Please select a letter..', 'inGame'],
            ['Congrats, you won!', 'wonGame'],
            ['Game over!', 'lostGame'],
        ]
        const gameStatus = this.props.status < 6 ? gameCondition[0] : gameCondition[2];
        return (<div>
                    <p
                        className={`HangmanMessage ${gameStatus[1]}`}
                    >{gameStatus[0]}</p>
                </div>);
    }
}

export default HangmanMessage;