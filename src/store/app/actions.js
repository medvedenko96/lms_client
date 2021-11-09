/* @Constants */
import { SET_DEVICE_MODE } from './constants';

export const setDeviceModeAction = deviceMode => dispatch =>
	dispatch({ type: SET_DEVICE_MODE, payload: deviceMode });
