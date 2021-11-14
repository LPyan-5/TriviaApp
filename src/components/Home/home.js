import React, { useCallback, useState } from 'react';
import classes from './home.module.css';
import axios from 'axios';
import Typo from '../UI/Typo';
import Select from '../Select';
import { Categories } from '../../store/categories';
import Button from '../Button';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { actions } from '../../store/actions/quiz';

const Home = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [category, setCategory] = useState(null);

    const handleFetchQuestions = useCallback(() => {
        axios.get(`https://opentdb.com/api.php?amount=10&category=${category.value}`)
        .then(response => {
            dispatch(actions.setQuestions(response.data.results));
            history.replace("/quiz");
        });
    }, [category]);

    return (
        <div className={classes.root}>
            <Typo variant="title" font="bold" color="secondary">Trivia App</Typo>
            <div className={classes.content}>
                <Typo variant="category" font="bold" className={classes.title}>Pick a Category</Typo>
                <Select
                    label="Category"
                    value={category ? category.name : ""}
                    onChange={setCategory}
                    labelKey="name"
                    items={Categories}
                />
            </div>
            <Button
                label="Start"
                onClick={handleFetchQuestions}
                disabled={!category}
                classes={{primary: classes.startButton}}
            />
        </div>
    );
};

export default Home;