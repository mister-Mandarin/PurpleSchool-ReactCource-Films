import styles from './Header.module.css';
import HeaderLink from './HeaderLink/HeaderLink.tsx';
import Auth from './Auth/Auth.tsx';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store.ts';

export default function Header() {

	const favoriteItem = useSelector((selector: RootState) => selector.favorite);

	return (
		<header className={styles.layoutWrapper}>
			<div className={styles.layoutContainer}>
				<img className={styles.layoutIcon} src="/bookmark.svg" alt=""/>
				<nav className={styles.layoutLinks}>
					<HeaderLink to='/'>Поиск фильмов</HeaderLink>
					<HeaderLink to='/favorites' icon={favoriteItem.length}>Мои фильмы</HeaderLink>
					<Auth />
				</nav>
			</div>
		</header>
	);
}