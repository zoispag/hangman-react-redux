import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HangmanLetters.css';

class HangmanLetters extends Component {
    static propTypes = {
        used: PropTypes.arrayOf(PropTypes.string)
    }

    static defaultProps = {
        used: []
    }

    static letters = [
        'a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x',
        'y', 'z'
    ];

    render () {
        const used = this.props.used.map(letter => letter);
        const letterButtons = HangmanLetters.letters.map((letter, index) => (
            <button
                className={`HangmanLetter${ used.includes(letter) ? ' disabled' : '' }`}
                disabled={used.includes(letter)}
                key={index}
            >{letter.toUpperCase()}</button>
        ));
        return (<div className="HangmanLetters">
                    {letterButtons}
                </div>);
    }
}

export default HangmanLetters;