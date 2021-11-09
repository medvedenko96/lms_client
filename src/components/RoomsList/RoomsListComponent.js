import React from 'react';

/* @Antd */
import { List, Space } from 'antd';

/* @Icons */
import MessageOutlined from '@ant-design/icons/MessageOutlined';
import TeamOutlined from '@ant-design/icons/TeamOutlined';

/* @Components */

const IconText = ({ icon, text }) => (
	<Space>
		{React.createElement(icon)}
		{text}
	</Space>
);

const RoomsListComponent = ({ rooms }) => {
	return <div>// custom</div>;
};

export default RoomsListComponent;
