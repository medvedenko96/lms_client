import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

/* @Components */
import App from 'components/App';

/* @Store */
import configureStore from 'store';

const history = createBrowserHistory();
const Store = configureStore(history);

const WrapperApp = () => {
	return (
		<Provider store={Store}>
			<ConnectedRouter history={history}>
				<App />
			</ConnectedRouter>
		</Provider>
	);
};

ReactDOM.render(<WrapperApp />, document.getElementById('root'));
