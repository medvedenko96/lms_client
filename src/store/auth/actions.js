/* @API */
import { auth } from 'service/api';

/* @Constants */
import { LOGIN, REGISTRATION } from './constants';

export const registerAction =
	({ name, email, password, isRememberMe }) =>
	async dispatch => {
		await auth.register({ name, email, password, isRememberMe });

		dispatch({ type: LOGIN });
	};

export const loginAction =
	({ email, password, isRememberMe }) =>
	async dispatch => {
		await auth.login({ email, password, isRememberMe });

		dispatch({ type: REGISTRATION });
	};
