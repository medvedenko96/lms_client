/* @Constants */
import { SET_DEVICE_MODE } from './constants';
import { DEVICE_MODE } from 'constants/app';

const initialState = {
	mode: DEVICE_MODE.MOBILE,
};

export default (state = initialState, action = {}) => {
	const { payload, type } = action;

	switch (type) {
		case SET_DEVICE_MODE:
			return { ...state, mode: payload };

		default:
			return state;
	}
};
