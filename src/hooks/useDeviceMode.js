import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

/* @Constants */
import { DEVICE_MODE } from 'constants/app';

/* @Actions */
import { setDeviceModeAction } from 'store/app/actions';

function getWindowWidth() {
	const hasWindow = typeof window !== 'undefined';

	if (hasWindow) {
		const { screen } = window;

		return screen?.width;
	}
}

const getDeviseMode = windowWidth => {
	let deviceMode = DEVICE_MODE.MOBILE;

	if (windowWidth > 998) {
		deviceMode = DEVICE_MODE.DESKTOP;
	}

	return deviceMode;
};

export default function useDeviceMode() {
	const dispatch = useDispatch();
	const [windowWidth, setWindowWidth] = useState(getWindowWidth());

	useEffect(() => {
		const handleResize = () => setWindowWidth(getWindowWidth());

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	dispatch(setDeviceModeAction(getDeviseMode(windowWidth)));
}
