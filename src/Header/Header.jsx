import styles from './Header.module.css';
import HeaderLink from '../HeaderLink/HeaderLink.jsx';
import Auth from '../Auth/Auth.jsx';

export default function Header() {

	return (
		<header className={styles.layoutWrapper}>
			<div className={styles.layoutContainer}>
				<img className={styles.layoutIcon} src="/bookmark.svg" alt=""/>
				<nav className={styles.layoutLinks}>
					<HeaderLink linkName='Поиск фильмов' />
					<HeaderLink icon={2} linkName='Мои фильмы' />
					<Auth />
				</nav>
			</div>
		</header>
	);
}