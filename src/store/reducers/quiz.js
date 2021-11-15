export const initialState = {
    questions: [],
    score: 0,
    current: 1
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
        case "SET_CURRENT": {
            return {
                ...state,
                current: action.payload
            }
        }
        case "CLEAR": {
            return {
                questions: [],
                score: 0,
                current: 1
            }
        }
        case "AUTO_SET": {
            return {
                questions: action.payload.questions,
                score: action.payload.score,
                current: action.payload.current
            }
        }
        default:
            return state
    }
};