import styles from './HeaderLink.module.css';
import cn from 'classnames';

export default function HeaderLink({ linkName, icon}) {
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
		<div className={cn(styles.layoutLink_container, {
			[styles.layoutContainer_user]: typeof icon === 'string'
		})}>
			<span className={styles.layoutLink}>{linkName}</span>
			{typeof icon === 'number' &&
				<span className={styles.linkNumber}>{icon}</span>
			}
			{typeof icon === 'string' && <img src={iconPath} alt=""/>
			}
		</div>
	);
}
