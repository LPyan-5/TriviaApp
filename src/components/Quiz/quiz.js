import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Typo from '../UI/Typo';
import classes from './quiz.module.css';
import Question from '../Question';
import Difficulty from '../Difficulty';

const Quiz = () => {
    const questions = useSelector(state => state.questions);
    const current = useSelector(state => state.current);
    const score = useSelector(state => state.score);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        if(questions && questions.length) {
            setAnswers(
                handleSort(
                    [questions[current - 1].correct_answer, ...questions[current - 1].incorrect_answers]
                )
            )
        }

    }, [questions, current]);

    const handleSort = options => {
        return options.sort(() => Math.random() - 0.5);
    }

    if(!questions || !questions.length || !current) {
        return null;
    }

    return (
        <div className={classes.root}>
            <Typo variant="title" color="secondary" font="bold">Question {current > 9 ? current : "0" + current}</Typo>
            <Difficulty difficulty={questions[current - 1].difficulty}/>
            <Question
                questions={questions}
                answers={answers}
                score={score}
                current={current}
                correct={questions[current - 1].correct_answer}
                setAnswers={setAnswers}
            />
        </div>
    );
};

export default Quiz;