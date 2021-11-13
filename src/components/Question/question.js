import React from 'react';
import classes from './question.module.css';
import Typo from '../UI/Typo';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { actions } from '../../store/actions/quiz';

const Question = (props) => {
    const { questions, answers, score, setScore, setCurrent, current, correct } = props;
    const history = useHistory();
    const dispatch = useDispatch();

    const handleCheck = (answer) => {
        if(current === questions.length) {
            dispatch(actions.setScore(score));
            history.replace("/result");
            return
        }
        if(answer === correct) {
            setScore(score + 1);
        }
        setCurrent(current + 1);
    }

    return (
        <div className={classes.root}>
            <Typo variant="category" font="bold" className={classes.question}>{questions[current - 1].question}</Typo>
            <div className={classes.answers}>
                {answers.length ? 
                    answers.map((answer, index) => {
                        return (
                            <div key={index} className={classes.answerBox} onClick={() => handleCheck(answer)}>
                                <Typo variant="p" font="bold" className={classes.answer}>{answer}</Typo>
                            </div>
                        )
                    })
                : null}
            </div>
        </div>
    );
};

export default Question;