import React from 'react';
import { elementType, object } from 'prop-types';
import { Link } from 'react-router-dom';

/* @Antd */
import { Input, Button } from 'antd';

/* @Icons */
import UserOutlined from '@ant-design/icons/UserOutlined';
import LockOutlined from '@ant-design/icons/LockOutlined';
import MailOutlined from '@ant-design/icons/MailOutlined';

/* @Constants */
import { ROUTERS_PATHS } from 'constants/paths';

/* @Styles */
import css from './Registration.module.css';

const propTypes = {
	intl: object,
	FormComponent: elementType,
	formik: object,
	form: object,
};

const RegistrationComponent = ({ intl, FormComponent, formik, form }) => {
	const { handleSubmit, errors, values, handleChange } = formik;

	return (
		<div className={css.wrapper}>
			<FormComponent form={form} id="registration" onFinish={handleSubmit}>
				<FormComponent.Item
					name="name"
					validateStatus={errors.name}
					onChange={handleChange}
					value={values.name}
					{...(errors.name && { validateStatus: 'error', help: errors.name })}
				>
					<Input
						prefix={<UserOutlined className={css.icon} />}
						placeholder={intl.formatMessage({ id: 'auth.name' })}
					/>
				</FormComponent.Item>
				<FormComponent.Item
					name="email"
					validateStatus={errors.email}
					onChange={handleChange}
					value={values.email}
					{...(errors.email && { validateStatus: 'error', help: errors.email })}
				>
					<Input
						prefix={<MailOutlined className={css.icon} />}
						placeholder={intl.formatMessage({ id: 'auth.email' })}
					/>
				</FormComponent.Item>
				<FormComponent.Item
					name="password"
					onChange={handleChange}
					value={values.password}
					{...(errors.password && { validateStatus: 'error', help: errors.password })}
				>
					<Input.Password
						prefix={<LockOutlined className={css.icon} />}
						placeholder={intl.formatMessage({ id: 'auth.password' })}
						autoComplete="on"
					/>
				</FormComponent.Item>
				<FormComponent.Item
					name="passwordConfirmation"
					onChange={handleChange}
					value={values.passwordConfirmation}
					{...(errors.passwordConfirmation && {
						validateStatus: 'error',
						help: errors.passwordConfirmation,
					})}
				>
					<Input.Password
						prefix={<LockOutlined className={css.icon} />}
						placeholder={intl.formatMessage({ id: 'auth.passwordConfirmation' })}
						autoComplete="on"
					/>
				</FormComponent.Item>
				<Button form="registration" type="primary" htmlType="submit" className={css.button}>
					{intl.formatMessage({ id: 'auth.registration' })}
				</Button>
				{intl.formatMessage({ id: 'auth.or' })}{' '}
				<Link to={ROUTERS_PATHS.LOGIN}>{intl.formatMessage({ id: 'auth.signIn' })}</Link>
			</FormComponent>
		</div>
	);
};

RegistrationComponent.propTypes = propTypes;

export default RegistrationComponent;
