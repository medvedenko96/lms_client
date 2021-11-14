import requestFactory from 'service/helpers/requestFactory';

export default {
	login({ email, password, isRememberMe } = {}) {
		const method = 'post';
		const url = '/api/login';
		const data = { email, password, isRememberMe };

		return requestFactory({ url, method, data });
	},

	register({ name, email, password, isRememberMe }) {
		const method = 'post';
		const url = '/api/register';
		const data = { name, email, password, isRememberMe };

		return requestFactory({ url, method, data });
	},

	logout() {
		const method = 'post';
		const url = '/api/logout';

		return requestFactory({ url, method });
	},

	forgot({ email }) {
		const method = 'post';
		const url = '/api/forgot';
		const data = { email };

		return requestFactory({ url, method, data });
	},

	reset({ email }) {
		const method = 'post';
		const url = '/api/reset';
		const data = { email };

		return requestFactory({ url, method, data });
	},
};
