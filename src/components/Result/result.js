import React from 'react';
import classes from './result.module.css';
import Typo from '../UI/Typo';
import { useSelector } from 'react-redux';
import Button from '../Button';
import { Link } from 'react-router-dom';

const Result = () => {
    const score = useSelector(state => state.score);

    return (
        <div className={classes.root}>
            <Typo variant="title" font="bold" color="secondary">Thank You</Typo>
            <Typo variant="category" font="bold" className={classes.score}>Your Score: {score} / 10</Typo>
            <Link to="/">
                <Button
                    label="Back to home"
                    classes={{primary: classes.backBtn}}
                />
            </Link>
        </div>
    );
};

export default Result;