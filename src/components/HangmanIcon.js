import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HangmanIcon.css';

class HangmanIcon extends Component {
    static propTypes = {
        status: PropTypes.number.isRequired
    }

    static defaultProps = {
        status: 0
    }

    render () {
        return (<div>
                    <img alt='hangman'
                         src={'images/hangman-icon/hangman'+ this.props.status + '.png'} />
                </div>);
    }
}

export default HangmanIcon;