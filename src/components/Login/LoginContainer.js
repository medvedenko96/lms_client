import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { func } from 'prop-types';
import { useIntl } from 'react-intl';

/* @Antd */
import { Form } from 'antd';

/* @Components */
import LoginComponent from './LoginComponent';

const propTypes = {
	onFormSubmit: func,
};

const LoginContainer = ({ onFormSubmit }) => {
	const intl = useIntl();
	const [form] = Form.useForm();

	const validationSchema = Yup.object().shape({
		email: Yup.string().required(intl.formatMessage({ id: 'validationMessage.requiredField' })),
		password: Yup.string().required(
			intl.formatMessage({ id: 'validationMessage.requiredField' })
		),
	});

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			isRememberMe: true,
		},
		validateOnChange: false,
		validationSchema,
		onSubmit: values => onFormSubmit(values),
	});

	return <LoginComponent intl={intl} FormComponent={Form} formik={formik} form={form} />;
};

LoginContainer.propTypes = propTypes;

export default LoginContainer;
