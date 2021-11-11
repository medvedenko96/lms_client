import React from 'react';

/* @Antd */
// eslint-disable-next-line no-unused-vars
import { List, Space } from 'antd';

/* @Icons */
// eslint-disable-next-line no-unused-vars
import MessageOutlined from '@ant-design/icons/MessageOutlined';
// eslint-disable-next-line no-unused-vars
import TeamOutlined from '@ant-design/icons/TeamOutlined';

/* @Components */

// eslint-disable-next-line no-unused-vars,react/prop-types
const IconText = ({ icon, text }) => (
	<Space>
		{React.createElement(icon)}
		{text}
	</Space>
);

// eslint-disable-next-line react/prop-types,no-unused-vars
const RoomsListComponent = ({ rooms }) => {
	return <div>custom</div>;
};

export default RoomsListComponent;
