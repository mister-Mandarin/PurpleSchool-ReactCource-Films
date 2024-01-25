import './Header.css';
import HeaderLink from '../HeaderLink/HeaderLink.jsx';

export default function Header() {
	return (
		<header className='layout-wrapper'>
			<div className="layout-container">
				<img className='layout-icon' src="/bookmark.svg" alt=""/>
				<nav className='layout-links'>
					<HeaderLink linkName='Поиск фильмов' />
					<HeaderLink icon={2} linkName='Мои фильмы' />
					<HeaderLink icon='user' linkName='Андрей' />
					<HeaderLink icon='login' linkName='Войти' />
				</nav>
			</div>
		</header>
	);
}