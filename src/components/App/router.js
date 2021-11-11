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
			<Route exect path="/login" render={() => <LoginPage />} />
			<Route exect path="/registration" render={() => <RegistrationPage />} />
			<Route exect path="/resetPassword" render={() => <ResetPasswordPage />} />
			<Route exect path="/dashboard" render={() => <DashboardPage />} />
			<Route render={() => <div>Not found 404</div>} />
		</Switch>
	);
};

export default Router;
