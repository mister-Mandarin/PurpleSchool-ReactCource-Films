import styles from './Header.module.css';
import HeaderLink from '../HeaderLink/HeaderLink.jsx';
import {useLocalStorage} from '../hooks/useLocalStorage.js';
import {useContext, useEffect, useReducer} from 'react';
import {USER_STATE,actionsLoginForm} from '../FormLogin/FormLogin.state.js';
import {AuthContext} from '../context/AuthUser.context.jsx';

export default function Header() {

	const {value} = useLocalStorage('userData');
	const [state, dispatch] = useReducer(actionsLoginForm, USER_STATE);
	const {auth, setAuth} = useContext(AuthContext);

	useEffect(() => {
		console.log('state ', state);
	}, [state]);

	useEffect(() => {
		console.log('value ', value);
	}, [value]);

	useEffect(() => {
		console.log('auth ', auth);
	}, [auth]);

	function logOut() {
		// setAuth({
		// 	UserName: null,
		// 	isLogin: false
		// });
		dispatch({type: 'LOGOUT'});
		dispatch({type: 'CHANGE_LOCALSTORAGE'});
	}

	return (
		<header className={styles.layoutWrapper}>
			<div className={styles.layoutContainer}>
				<img className={styles.layoutIcon} src="/bookmark.svg" alt=""/>
				<nav className={styles.layoutLinks}>
					<HeaderLink linkName='Поиск фильмов' />
					<HeaderLink icon={2} linkName='Мои фильмы' />
					{auth.name > 0 &&
						<HeaderLink
							icon="user"
							linkName={auth.name}
						/>}
					{auth.isLogin &&
						<HeaderLink
							onClick={logOut}
							linkName='Выйти'
						/>}
					{!auth.isLogin &&
						<HeaderLink
							icon='login'
							linkName='Войти'
						/>}
				</nav>
			</div>
		</header>
	);
}