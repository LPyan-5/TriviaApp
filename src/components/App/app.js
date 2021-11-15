import React, { useEffect } from 'react';
import Routes from '../../routes';
import { renderRoutes } from "react-router-config";
import classes from './app.module.css';
import { continueQuiz } from '../../store/actions/quiz';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

const App = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		if(history.location.pathname === "/quiz" || history.location.pathname === "/result") {
			dispatch(continueQuiz());
		}
	}, []);

	return (
		<div className={classes.root}>
			{renderRoutes(Routes)}
		</div>
	);
};

export default App;
