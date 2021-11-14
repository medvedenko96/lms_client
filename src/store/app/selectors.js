/* @Constants */
import { DEVICE_MODE, ENV } from 'constants/app';

export const getApp = state => state.app;

export const getDeviceModeSelector = state => getApp(state).mode;

export const isDesktopSelector = state => getDeviceModeSelector(state) === DEVICE_MODE.DESKTOP;

export const isProductionEnv = () => process.env.NODE_ENV === ENV.PRODUCTION;
