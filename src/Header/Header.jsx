import './Header.css';
import LayoutLink from '../LayoutLink/LayoutLink.jsx';

export default function Header() {
	return (
		<header className='layout-wrapper'>
			<div className="layout-container">
				<img className='layout-icon' src="/bookmark.svg" alt=""/>
				<nav className='layout-links'>
					<LayoutLink linkName='Поиск фильмов' />
					<LayoutLink icon={2} linkName='Мои фильмы' />
					<LayoutLink icon='user' linkName='Андрей' />
					<LayoutLink icon='login' linkName='Войти' />
				</nav>
			</div>
		</header>
	);
}