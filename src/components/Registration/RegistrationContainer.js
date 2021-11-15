import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { func } from 'prop-types';
import { useIntl } from 'react-intl';

/* @Antd */
import { Form } from 'antd';

/* @Components */
import RegistrationComponent from './RegistrationComponent';

const propTypes = {
	onFormSubmit: func,
};

const RegistrationContainer = ({ onFormSubmit }) => {
	const intl = useIntl();
	const [form] = Form.useForm();

	const validationSchema = Yup.object().shape({
		name: Yup.string().required(intl.formatMessage({ id: 'validationMessage.requiredField' })),
		email: Yup.string()
			.email(intl.formatMessage({ id: 'validationMessage.invalidEmail' }))
			.required(intl.formatMessage({ id: 'validationMessage.requiredField' })),
		password: Yup.string()
			.required(intl.formatMessage({ id: 'validationMessage.requiredField' }))
			.min(5, intl.formatMessage({ id: 'validationMessage.passwordLength' })),
		passwordConfirm: Yup.string()
			.required(intl.formatMessage({ id: 'validationMessage.requiredField' }))
			.oneOf(
				[Yup.ref('password'), null],
				intl.formatMessage({ id: 'validationMessage.invalidConfirmPassword' })
			),
	});

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			password: '',
			passwordConfirm: '',
		},
		validateOnChange: false,
		validationSchema,
		onSubmit: values => onFormSubmit(values),
	});

	return <RegistrationComponent intl={intl} FormComponent={Form} formik={formik} form={form} />;
};

RegistrationContainer.propTypes = propTypes;

export default RegistrationContainer;
