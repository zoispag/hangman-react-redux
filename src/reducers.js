var randomWords = require('random-words');

export default (state = {}, action) => {
    switch(action.type) {
        case "HANDLE_LETTER":
            const letters = [...state.letters, action.letter];
            return {
                ...state,
                letters
            };
        case "RESET_GAME":
            return {
                word: randomWords(),
                letters: []
            };
        default:
            return state;
    }
};