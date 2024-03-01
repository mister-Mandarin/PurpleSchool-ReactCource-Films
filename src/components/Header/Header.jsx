import styles from './Header.module.css';
import HeaderLink from '../HeaderLink/HeaderLink.jsx';
import Auth from '../Auth/Auth.jsx';

export default function Header() {

	return (
		<header className={styles.layoutWrapper}>
			<div className={styles.layoutContainer}>
				<img className={styles.layoutIcon} src="/bookmark.svg" alt=""/>
				<nav className={styles.layoutLinks}>
					<HeaderLink>Поиск фильмов</HeaderLink>
					<HeaderLink icon={2}>Мои фильмы</HeaderLink>
					<Auth />
				</nav>
			</div>
		</header>
	);
}