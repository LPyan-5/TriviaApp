import React, { useState, useRef } from 'react';
import classes from './select.module.css';
import useOnClickOutside from '../../helper/useOnClickOutside';

const Select = ({ value, onChange, label, labelKey, items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const rootRef = useRef();
    useOnClickOutside(rootRef, () => {
        if (isOpen) setIsOpen(!isOpen);
    });

    return (
        <div ref={rootRef} className={classes.root}>
            <div
                className={`${classes.select} ${isOpen ? classes.focused : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className={classes.main}>
                    <div
                        className={`${classes.title} ${value ? classes.selected : ''}`}
                    >
                        {value ? value : label}
                    </div>
                    <img
                        src="images/arrow.png"
                        className={isOpen ? classes.opened : classes.closed}
                        alt=""
                    />
                </div>
            </div>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`${classes.options} ${isOpen ? classes.open : classes.hidden}`}
            >
                {items.map((item, index) => (
                    <div
                        className={classes.option}
                        key={index}
                        onClick={() => onChange(item)}
                    >
                        {item[labelKey]}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Select;
