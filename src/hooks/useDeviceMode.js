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

/*
 320px-480px: Mobile devices
 481px—768px: iPads, Tablets
 769px—1024px: Small screens, laptops
 1025px—1200px: Desktops, large screens
 1201px and more— Extra large screens, TV
*/

const getDeviseMode = windowWidth => {
	let deviceMode = DEVICE_MODE.MOBILE;

	if (windowWidth > 480 && windowWidth <= 1023) {
		deviceMode = DEVICE_MODE.TABLET;
	}

	if (windowWidth >= 1024) {
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
