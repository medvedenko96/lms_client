import React, { useState } from 'react';

/* @Components */
import HeaderComponent from './HeaderComponent';

const HeaderContainer = () => {
	const [visible, setVisible] = useState(false);

	const handleOpenMenu = () => setVisible(true);

	const handleCloseMenu = () => setVisible(false);

	return (
		<HeaderComponent
			visible={visible}
			onOpenMenu={handleOpenMenu}
			onCloseMenu={handleCloseMenu}
		/>
	);
};

export default HeaderContainer;
