import styles from './Header.module.css';
import HeaderLink from '../HeaderLink/HeaderLink.jsx';

export default function Header() {
	return (
		<header className={styles.layoutWrapper}>
			<div className={styles.layoutContainer}>
				<img className={styles.layoutIcon} src="/bookmark.svg" alt=""/>
				<nav className={styles.layoutLinks}>
					<HeaderLink linkName='Поиск фильмов' />
					<HeaderLink icon={2} linkName='Мои фильмы' />
					<HeaderLink icon='user' linkName='Андрей' />
					<HeaderLink icon='login' linkName='Войти' />
				</nav>
			</div>
		</header>
	);
}