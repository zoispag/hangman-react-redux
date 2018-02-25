import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HangmanIcon.css';

class HangmanIcon extends Component {
    static propTypes = {
        count: PropTypes.number.isRequired
    }

    render () {
        return (<div>
                    <img alt='hangman'
                         src={'images/hangman-icon/hangman'+ this.props.count + '.png'} />
                </div>);
    }
}

export default HangmanIcon;