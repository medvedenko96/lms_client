import React from 'react';
import { Route, Switch } from 'react-router-dom';

/* @Constants */
import { ROUTERS_PATHS } from 'constants/paths';

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
			<Route exect path={ROUTERS_PATHS.LOGIN} render={() => <LoginPage />} />
			<Route exect path={ROUTERS_PATHS.REGISTRATION} render={() => <RegistrationPage />} />
			<Route exect path={ROUTERS_PATHS.RESET_PASSWORD} render={() => <ResetPasswordPage />} />
			<Route exect path={ROUTERS_PATHS.DASHBOARD} render={() => <DashboardPage />} />
			<Route render={() => <div>Not found 404</div>} />
		</Switch>
	);
};

export default Router;
