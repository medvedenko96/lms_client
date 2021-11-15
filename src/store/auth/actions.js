/* @API */
import { auth } from 'service/api';

/* @Constants */
import { LOGIN, REGISTRATION } from './constants';

/* @Utils */
import { snakeToCamelMapper } from 'utils/snakeToCamel';

export const registerAction =
	({ name, email, password, passwordConfirm }) =>
	async dispatch => {
		await auth.register(snakeToCamelMapper({ name, email, password, passwordConfirm }));

		dispatch({ type: LOGIN });
	};

export const loginAction =
	({ email, password, isRememberMe }) =>
	async dispatch => {
		await auth.login({ email, password, isRememberMe });

		dispatch({ type: REGISTRATION });
	};
