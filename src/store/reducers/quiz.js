const initialState = {
    questions: {},
    score: 0
};

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case "SET_QUESTIONS": {
            return {
                ...state,
                questions: action.payload
            }
        }
        case "SET_SCORE": {
            return {
                ...state,
                score: action.payload
            }
        }
        default:
            return state
    }
};