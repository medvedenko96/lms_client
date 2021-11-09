import React from 'react';

/* @Components */
import Header from 'components/Header';
import RoomsList from 'components/RoomsList';

const DashboardPageComponent = () => {
	return (
		<div>
			<Header />
			<div>
				<RoomsList />
			</div>
		</div>
	);
};

export default DashboardPageComponent;
