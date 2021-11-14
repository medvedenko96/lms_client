const { override, fixBabelImports } = require('customize-cra');

const updateESLintWebpackPlugin = options => (config, env) => {
	if (env === 'development') {
		config.plugins.forEach(plugin => {
			if (plugin.constructor.name === 'ESLintWebpackPlugin') {
				plugin.options = { ...plugin.options, ...options };
			}
		});
	}

	return config;
};

module.exports = override(
	updateESLintWebpackPlugin({
		failOnError: false,
		emitWarning: true,
	}),
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: true,
	})
);
