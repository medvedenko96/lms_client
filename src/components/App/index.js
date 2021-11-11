import React from 'react';
import { IntlProvider, ReactIntlErrorCode } from 'react-intl';

/* @Router */
import Router from './router';

/* @Utils */
import { flattenMessages } from 'utils/flattenMessages';

/* @locales */
import locales from './locales';

/* @Styles */
import './index.css';

const RU = 'ru';

const onIntlError = error => {
	if (typeof document === 'undefined') {
		return;
	}

	if (error.code === ReactIntlErrorCode.MISSING_DATA) {
		return;
	}
	// eslint-disable-next-line no-console
	console.error(new Error(error));
};

const App = () => {
	return (
		<IntlProvider
			messages={flattenMessages(locales[RU])}
			locale={RU}
			defaultLocale={RU}
			onError={onIntlError}
		>
			<Router />
		</IntlProvider>
	);
};

export default App;
