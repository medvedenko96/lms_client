import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';

/* @Components */
import Registration from 'components/Registration';

/* @Actions */
import { registerAction } from 'store/auth/actions';

const propTypes = {
	register: func,
};

const RegistrationPageContainer = ({ register }) => {
	const handleFormSubmit = async values => await register(values);

	return <Registration onFormSubmit={handleFormSubmit} />;
};

RegistrationPageContainer.propTypes = propTypes;

const mapDispatchToProps = {
	register: registerAction,
};

export default connect(null, mapDispatchToProps)(RegistrationPageContainer);
