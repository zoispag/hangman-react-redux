import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HangmanLetters.css';

class HangmanLetters extends Component {
    constructor(props) {
        super(props);
        
        this.handleLetter = this.handleLetter.bind(this);
    }

    static propTypes = {
        letters: PropTypes.arrayOf(PropTypes.string),
        onClick: PropTypes.func
    }

    static defaultProps = {
        onClick() {}
    }
    
    handleLetter(e) {
        this.props.onClick(e.target.name);
    }

    static allLetters = [
        'a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x',
        'y', 'z'
    ];

    render () {
        const { letters } = this.props;
        const letterButtons = HangmanLetters.allLetters.map(letter => (
            <button
                type="button"
                className={`HangmanLetter${ letters.includes(letter) ? ' disabled' : '' }`}
                disabled={letters.includes(letter)}
                key={letter}
                name={letter}
                onClick={this.handleLetter}
            >{letter.toUpperCase()}</button>
        ));
        return (<div className="HangmanLetters">
                    {letterButtons}
                </div>);
    }
}

export default HangmanLetters;