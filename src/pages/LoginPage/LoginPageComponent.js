import React from 'react';

/* @Components */
import Login from 'components/Login';

const LoginPageComponent = () => {
	const handleFormSubmit = values => {
		// eslint-disable-next-line no-console
		console.log(values);
	};

	return <Login onFormSubmit={handleFormSubmit} />;
};

export default LoginPageComponent;
