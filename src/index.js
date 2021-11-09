import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

/* @Router */
import Router from 'router';

/* @Store */
import configureStore from 'store';

/* @Antd styles */
import '../node_modules/antd/dist/antd.css';

const history = createBrowserHistory();
const Store = configureStore(history);

const WrapperApp = () => {
	return (
		<Provider store={Store}>
			<ConnectedRouter history={history}>
				<Router />
			</ConnectedRouter>
		</Provider>
	);
};

ReactDOM.render(<WrapperApp />, document.getElementById('root'));
