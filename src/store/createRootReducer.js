import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import app from './app/reduser';

const createRootReducer = history => combineReducers({ router: connectRouter(history), app });
export default createRootReducer;
