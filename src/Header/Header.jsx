import styles from './Header.module.css';
import HeaderLink from '../HeaderLink/HeaderLink.jsx';
import {useLocalStorage} from '../hooks/useLocalStorage.js';
import {useEffect, useReducer} from 'react';
import {USER_STATE,actionsLoginForm} from '../FormLogin/FormLogin.state.js';

export default function Header() {

	const {value} = useLocalStorage('userData');
	const [state, dispatch] = useReducer(actionsLoginForm, USER_STATE);

	useEffect(() => {
		console.log('state ', state);
	}, [state]);

	useEffect(() => {
		console.log('value ', value);
	}, [value]);

	function logOut() {
		dispatch({type: 'LOGOUT'});
	}

	return (
		<header className={styles.layoutWrapper}>
			<div className={styles.layoutContainer}>
				<img className={styles.layoutIcon} src="/bookmark.svg" alt=""/>
				<nav className={styles.layoutLinks}>
					<HeaderLink linkName='Поиск фильмов' />
					<HeaderLink icon={2} linkName='Мои фильмы' />
					{value.name.length > 0 && <HeaderLink icon="user" linkName={value.name}/>}
					{!value.isLogin &&
						<HeaderLink
							icon='login'  
							linkName='Войти'
						/>}
					{value.isLogin &&
						<HeaderLink
							onClick={logOut}
							linkName='Выйти'
						/>}
				</nav>
			</div>
		</header>
	);
}