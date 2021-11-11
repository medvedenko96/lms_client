import React from 'react';
import { node, object } from 'prop-types';

/* @Antd */
import { Input, Button } from 'antd';

/* @Icons */
import UserOutlined from '@ant-design/icons/UserOutlined';
import LockOutlined from '@ant-design/icons/LockOutlined';

/* @Styles */
import styles from './Login.module.css';

const propTypes = {
	intl: object,
	Form: node,
	formik: object,
	form: object,
};

const LoginComponent = ({ intl, FormComponent, formik, form }) => {
	const { handleSubmit, errors, values, handleChange } = formik;

	return (
		<div className={styles.wrapper}>
			<FormComponent form={form} id="login-manager" onFinish={handleSubmit}>
				<FormComponent.Item
					name="login"
					wrapperCol={{ span: 24, offset: 0 }}
					validateStatus={errors.login}
					onChange={handleChange}
					value={values.login}
					{...(errors.login && {
						validateStatus: 'error',
						help: errors.login,
					})}
				>
					<Input
						prefix={<UserOutlined className={styles.icon} />}
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
						prefix={<LockOutlined className={styles.icon} />}
						placeholder={intl.formatMessage({ id: 'auth.password' })}
						autoComplete="on"
					/>
				</FormComponent.Item>
				<Button form="login-manager" type="primary" htmlType="submit">
					Войти
				</Button>
			</FormComponent>
		</div>
	);
};

LoginComponent.propTypes = propTypes;

export default LoginComponent;
