import styles from './Header.module.css';
import HeaderLink from './HeaderLink/HeaderLink.tsx';
import Auth from './Auth/Auth.tsx';

export default function Header() {

	return (
		<header className={styles.layoutWrapper}>
			<div className={styles.layoutContainer}>
				<img className={styles.layoutIcon} src="/bookmark.svg" alt=""/>
				<nav className={styles.layoutLinks}>
					<HeaderLink to='/'>Поиск фильмов</HeaderLink>
					<HeaderLink to='/favorites' icon={2}>Мои фильмы</HeaderLink>
					<Auth />
				</nav>
			</div>
		</header>
	);
}