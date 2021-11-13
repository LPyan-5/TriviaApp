import React, { useCallback, useState } from 'react';
import classes from './home.module.css';
import axios from 'axios';
import Typo from '../UI/Typo';
import Select from '../Select';
import { Categories } from '../../store/categories';
import Button from '../Button';
import { useHistory } from 'react-router';

const Home = () => {
    const history = useHistory();
    const [category, setCategory] = useState(null);
    const [questions, setQuestions] = useState([]);

    const handleFetchQuestions = useCallback(() => {
        axios.get(`https://opentdb.com/api.php?amount=10&category=${category.value}&difficulty=easy`)
        .then(response => {
            setQuestions(response.data.results);
            history.replace("/quiz", { state: { questions }})
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
            />
        </div>
    );
};

export default Home;