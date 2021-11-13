import React from 'react';
import defaultClasses from './button.module.css';
import { mergeClasses } from '../../helper/mergeClasses';

const Button = (props) => {
    const { type, disabled, onClick, label } = props;
    const classes = mergeClasses(defaultClasses, props.classes);

    return (
        <button
            type={type}
            className={`${classes.root}
                        ${classes.primary}
                        ${disabled ? classes.disabledButton : ""}`
                    }
            onClick={onClick}
            disabled={disabled}
        >
            <span className={classes.button_label}>{label}</span>
        </button>
    );
};

export default Button;