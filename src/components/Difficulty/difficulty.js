import React from 'react';
import classes from './difficulty.module.css';

const Difficulty = ({ difficulty }) => {
    if (!difficulty) {
        return null;
    }

    return (
        <div className={`${classes.root} ${classes[difficulty]}`}>
            {difficulty}
        </div>
    );
};

export default Difficulty;
