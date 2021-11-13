import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Typo from '../UI/Typo';
import classes from './quiz.module.css';
import Question from '../Question';
import Difficulty from '../Difficulty';

const Quiz = () => {
    const questions = useSelector(state => state.questions);
    const [current, setCurrent] = useState(1);
    const [answers, setAnswers] = useState([]);
    const [score, setScore] = useState(0);

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

    if(!questions || !questions.length) {
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
                setScore={setScore}
                setCurrent={setCurrent}
                current={current}
                correct={questions[current - 1].correct_answer}
                setAnswers={setAnswers}
            />
        </div>
    );
};

export default Quiz;