import React from 'react';
import classes from './question.module.css';
import Typo from '../UI/Typo';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { actions } from '../../store/actions/quiz';

const Question = (props) => {
    const { questions, answers, score, current, correct } = props;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleCheck = (answer) => {
        if (answer === correct) {
            dispatch(actions.setScore(score + 1));
        }
        selectedToStorage(answer, correct);
        if (current === questions.length) {
            navigate('/result');
            return;
        } else {
            dispatch(actions.setCurrent(current + 1));
        }
    };

    const selectedToStorage = (answer) => {
        let data = JSON.parse(localStorage.getItem('quiz'));
        const lastItem = data.pop();
        let item = {
            ...lastItem,
            selected: [
                ...lastItem.selected,
                { answer, value: answer === correct },
            ],
            score: answer === correct ? score + 1 : score,
            current: current + 1,
        };
        data.push(item);
        localStorage.setItem('quiz', JSON.stringify(data));
    };

    return (
        <div className={classes.root}>
            <Typo variant="category" font="bold" className={classes.question}>
                {questions[current - 1].question}
            </Typo>
            <div className={classes.answers}>
                {answers.length
                    ? answers.map((answer, index) => {
                          return (
                              <div
                                  key={index}
                                  className={classes.answerBox}
                                  onClick={() => handleCheck(answer)}
                              >
                                  <Typo
                                      variant="p"
                                      font="bold"
                                      className={classes.answer}
                                  >
                                      {answer}
                                  </Typo>
                              </div>
                          );
                      })
                    : null}
            </div>
        </div>
    );
};

export default Question;
