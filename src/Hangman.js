import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Hangman.css';
import HangmanIcon from './components/HangmanIcon';
import HangmanWord from './components/HangmanWord';
import HangmanLetters from './components/HangmanLetters';
import HangmanMessage from './components/HangmanMessage';
import HangmanReset from './components/HangmanReset';

class Hangman extends Component {

    render() {
        const { word, letters } = this.props;
        const wrongLettersCount = letters.filter(letter => !word.split('').includes(letter)).length;
        const gameIsWon = word.split('').filter(letter => letters.includes(letter)).length === word.split('').length;
        const gameIsActive = !gameIsWon && wrongLettersCount < 6;
        const gameCondition = gameIsActive ? 0 : (gameIsWon ? 1 : 2);
        return (
            <div className="Hangman">
                <h1 className="title"><span className="red">HANG</span>MAN</h1>
                <HangmanIcon count={wrongLettersCount} />
                <HangmanWord word={word} letters={letters} />
                <HangmanLetters letters={letters} gamehasEnded={!gameIsActive} />
                <HangmanMessage conditionIndex={gameCondition} word={word} />
                <HangmanReset />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    word: state.word,
    letters: state.letters
});

export default
    connect(mapStateToProps, null) (Hangman);
