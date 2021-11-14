import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';

/* @Components */
import Login from 'components/Login';

/* @Actions */
import { loginAction } from 'store/auth/actions';

const propTypes = {
	login: func,
};

const LoginPageContainer = ({ login }) => {
	const handleFormSubmit = async values => await login(values);

	return <Login onFormSubmit={handleFormSubmit} />;
};

LoginPageContainer.propTypes = propTypes;

const mapDispatchToProps = {
	login: loginAction,
};

export default connect(null, mapDispatchToProps)(LoginPageContainer);
