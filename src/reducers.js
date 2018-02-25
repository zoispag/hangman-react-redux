export default (state = {}, action) => {
    switch(action.type) {
        case "HANDLE_LETTER":
            const letters = [...state.letters, action.letter];
            return {
                ...state,
                letters
            };
        default:
            return state;
    }
};