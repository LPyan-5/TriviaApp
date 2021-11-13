import React from 'react';
import classes from './typo.module.css';
//props
//variant = "title"||"category"||"p"
//color = "primary"||"secondary"
//font = "medium"||"bold"
const Typo = ({
                children,
                as: Component = "p",
                variant = "p",
                color = "primary",
                font = 'medium',
                className,
                ...rest
            }) => {
                return (
                    <Component
                        className={`${classes[`typo_${variant}`]} ${classes[`typo_${color}`]} ${classes[`typo_${font}`]} ${className}`}
                        {...rest}
                    >
                        {children}
                    </Component>
                );
};

export default Typo;