import React from 'react';
import Routes from '../../routes';
import { renderRoutes } from "react-router-config";
import classes from './app.module.css';

const App = () => {
	return (
		<div className={classes.root}>
			{renderRoutes(Routes)}
		</div>
	);
};

export default App;
