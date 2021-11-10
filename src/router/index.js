import React from 'react';
import { Route, Switch } from 'react-router-dom';

/* @Pages */
import LoginPage from 'pages/LoginPage';
import RegistrationPage from 'pages/RegistrationPage';
import ResetPasswordPage from 'pages/ResetPasswordPage';
import DashboardPage from 'pages/DashboardPage';

/* @hooks */
import useDeviceMode from 'hooks/useDeviceMode';

const Router = () => {
	useDeviceMode();

	return (
		<Switch>
			<Route exect path="/login" render={props => <LoginPage {...props} />} />
			<Route exect path="/registration" render={props => <RegistrationPage {...props} />} />
			<Route exect path="/resetPassword" render={props => <ResetPasswordPage {...props} />} />
			<Route exect path="/dashboard" render={props => <DashboardPage {...props} />} />
			<Route render={props => <div {...props}>Not found 404</div>} />
		</Switch>
	);
};

export default Router;
