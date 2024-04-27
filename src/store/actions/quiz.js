import { createActions } from 'redux-actions';

export const actions = createActions({
    SET_QUESTIONS: null,
    SET_SCORE: null,
    SET_CURRENT: null,
    CLEAR: null,
    AUTO_SET: null,
});

export const continueQuiz = () => {
    return (dispatch) => {
        let quizData = JSON.parse(localStorage.getItem('quiz'));
        if (quizData && quizData.length) {
            const currentQuiz = quizData.pop();
            dispatch(
                actions.autoSet({
                    questions: currentQuiz.questions,
                    score: currentQuiz.score,
                    current: currentQuiz.current,
                }),
            );
        }
    };
};
