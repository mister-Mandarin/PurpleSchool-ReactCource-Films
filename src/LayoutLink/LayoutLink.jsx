import './LayoutLink.css';

export default function LayoutLink({ linkName, icon }) {
	let iconPath;
	let cl = 'layout-link_container layout-container_user';

	if (icon) {
		switch (icon) {
		case 'login':
			iconPath = '/login.svg';
			break;
		case 'user':
			iconPath = '/user.svg';
			break;
		default:
			iconPath = '';
			cl = 'layout-link_container';
		}
	}

	return (
		<div className={cl}>
			<span className='layout-link'>{linkName}</span>
			{typeof icon === 'number' ? <span className='link-number'>{icon}</span> : <img src={iconPath} alt="" />}
		</div>
	);
}
