import styles from './HeaderLink.module.css';
import cn from 'classnames';
import {HeaderLinkProps} from './HeaderLink.props.ts';
import {NavLink} from 'react-router-dom';

export default function HeaderLink({ children, icon, ...props}: HeaderLinkProps) {
	let iconPath;

	if (typeof icon === 'string') {
		switch (icon) {
		case 'login':
			iconPath = '/login.svg';
			break;
		case 'user':
			iconPath = '/user.svg';
			break;
		}
	}

	return (
		<NavLink
			{...props}
			className={({isActive}) => cn(
				styles.layoutLink_container, {
					[styles.layoutContainer_user]: typeof icon === 'string',
					[styles.isActive]: isActive
				})}>
			<span className={styles.layoutLink}>{children}</span>
			{typeof icon === 'number' &&
				<span className={styles.linkNumber}>{icon}</span>
			}
			{typeof icon === 'string' && <img src={iconPath} alt=""/>
			}
		</NavLink>
	);
}
