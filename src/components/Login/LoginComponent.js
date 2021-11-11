import React from 'react';
import { node, object } from 'prop-types';
import { Link } from 'react-router-dom';

/* @Antd */
import { Input, Button, Checkbox } from 'antd';

/* @Icons */
import UserOutlined from '@ant-design/icons/UserOutlined';
import LockOutlined from '@ant-design/icons/LockOutlined';

/* @Constants */
import { ROUTERS_PATHS } from 'constants/paths';

/* @Styles */
import css from './Login.module.css';

const propTypes = {
	intl: object,
	Form: node,
	formik: object,
	form: object,
};

const LoginComponent = ({ intl, FormComponent, formik, form }) => {
	const { handleSubmit, errors, values, handleChange } = formik;

	return (
		<div className={css.wrapper}>
			<FormComponent form={form} id="login-manager" onFinish={handleSubmit}>
				<FormComponent.Item
					name="login"
					validateStatus={errors.login}
					onChange={handleChange}
					value={values.login}
					{...(errors.login && {
						validateStatus: 'error',
						help: errors.login,
					})}
				>
					<Input
						prefix={<UserOutlined className={css.icon} />}
						placeholder={intl.formatMessage({ id: 'auth.email' })}
					/>
				</FormComponent.Item>
				<FormComponent.Item
					name="password"
					onChange={handleChange}
					value={values.password}
					{...(errors.password && {
						validateStatus: 'error',
						help: errors.password,
					})}
				>
					<Input.Password
						prefix={<LockOutlined className={css.icon} />}
						placeholder={intl.formatMessage({ id: 'auth.password' })}
						autoComplete="on"
					/>
				</FormComponent.Item>
				<div className={css.forgotPasswordWrapper}>
					<FormComponent.Item name="remember" noStyle>
						<Checkbox checked={values.remember} onChange={handleChange}>
							{intl.formatMessage({ id: 'auth.rememberMe' })}
						</Checkbox>
					</FormComponent.Item>
					<Link to={ROUTERS_PATHS.RESET_PASSWORD}>
						{intl.formatMessage({ id: 'auth.forgotPassword' })}
					</Link>
				</div>
				<Button
					form="login-manager"
					type="primary"
					htmlType="submit"
					className={css.button}
				>
					{intl.formatMessage({ id: 'auth.signIn' })}
				</Button>
				{intl.formatMessage({ id: 'auth.or' })}{' '}
				<Link to={ROUTERS_PATHS.REGISTRATION}>
					{intl.formatMessage({ id: 'auth.registerNow' })}
				</Link>
			</FormComponent>
		</div>
	);
};

LoginComponent.propTypes = propTypes;

export default LoginComponent;
