export const snakeToCamel = str =>
	str.replace(/([-_][a-z])/g, group => {
		return group.toUpperCase().replace('-', '').replace('_', '');
	});

export const camelToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

export const snakeToCamelMapper = obj => {
	const result = {};

	Object.keys(obj).map(key => (result[camelToSnakeCase(key)] = obj[key]));

	return result;
};
