import React, { useEffect } from 'react';
import classes from './result.module.css';
import Typo from '../UI/Typo';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button';
import { Link } from 'react-router-dom';
import { actions } from '../../store/actions/quiz';

const Result = () => {
    const dispatch = useDispatch();
    const score = useSelector((state) => state.score);
    const quizData = localStorage.getItem('quiz');

    useEffect(() => {
        return () => dispatch(actions.clear());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={classes.root}>
            {quizData &&
            JSON.parse(quizData) &&
            JSON.parse(quizData).length > 1 ? (
                <Link to="/scores" className={classes.previousLink}>
                    <Typo variant="p" className={classes.previousScores}>
                        Want to see your previous scores?
                    </Typo>
                </Link>
            ) : null}
            <Typo variant="title" font="bold" color="secondary">
                Thank You
            </Typo>
            <Typo variant="category" font="bold" className={classes.score}>
                Your Score: {score} / 10
            </Typo>
            <Link to="/">
                <Button
                    label="Back to home"
                    classes={{ primary: classes.backBtn }}
                />
            </Link>
        </div>
    );
};

export default Result;
