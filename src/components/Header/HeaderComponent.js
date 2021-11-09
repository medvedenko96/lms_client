import React from 'react';
import { bool, func } from 'prop-types';

/* @Antd */
import { Drawer } from 'antd';

/* @Icons */
import CommentOutlined from '@ant-design/icons/CommentOutlined';
import MenuOutlined from '@ant-design/icons/MenuOutlined';

/* @Styles */
import styles from './Header.module.css';

const propTypes = {
	visible: bool,
	onOpenMenu: func,
	onCloseMenu: func,
};

const HeaderComponent = ({ visible, onOpenMenu, onCloseMenu }) => {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.logo}>
					<CommentOutlined style={{ fontSize: '24px', color: '#08c', marginRight: 8 }} />
					LMS
				</div>
				<div className={styles.controlPanelDesktop}>
					<div className={styles.balance}>200$</div>
					<div className={styles.user}>Kara</div>
				</div>
				<div className={styles.controlPanelMobile} onClick={onOpenMenu}>
					<MenuOutlined style={{ fontSize: '16px' }} className={styles.burgerIcon} />
				</div>
			</div>
			<Drawer placement="right" onClose={onCloseMenu} visible={visible}>
				<div className={styles.balance}>200$</div>
				<div className={styles.user}>Kara</div>
			</Drawer>
		</>
	);
};

HeaderComponent.propTypes = propTypes;

export default HeaderComponent;
