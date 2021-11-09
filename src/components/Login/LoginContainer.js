import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { func } from 'prop-types';

/* @Antd */
import { Form } from 'antd';

/* @Components */
import LoginComponent from './LoginComponent';

const propTypes = {
	onFormSubmit: func,
};

const LoginContainer = ({ onFormSubmit }) => {
	const [form] = Form.useForm();

	const validationSchema = Yup.object().shape({
		login: Yup.string().required('Поле обязательное'),
		password: Yup.string().required('Поле обязательное'),
	});

	const formik = useFormik({
		initialValues: {
			login: '',
			password: '',
		},
		validateOnChange: false,
		validationSchema,
		onSubmit: values => onFormSubmit(values),
	});

	return <LoginComponent FormComponent={Form} formik={formik} form={form} />;
};

LoginContainer.propTypes = propTypes;

export default LoginContainer;