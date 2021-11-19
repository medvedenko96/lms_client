import axios from 'axios';

const requestFactory = async ({ url, method = 'get', data = null }) => {
	let respData = null;
	let options = null;

	try {
		options = { url, method, data };

		const resp = await axios(options);
		const contentType = resp.headers.get('content-type');
		const isJsonContentType = contentType && contentType.indexOf('application/json') !== -1;

		if (isJsonContentType) {
			respData = await resp.json();
		} else {
			respData = resp;
		}
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error(new Error(error));
		throw error;
	}

	return respData;
};

export default requestFactory;
