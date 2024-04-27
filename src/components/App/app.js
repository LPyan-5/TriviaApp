import React, { useEffect } from 'react';
import routes from '../../routes';
import classes from './app.module.css';
import { continueQuiz } from '../../store/actions/quiz';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { Routes, Route } from 'react-router-dom';

const App = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/quiz' || location.pathname === '/result') {
            dispatch(continueQuiz());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={classes.root}>
            <Routes>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={route.component}
                    />
                ))}
            </Routes>
        </div>
    );
};

export default App;
