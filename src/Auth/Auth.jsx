import HeaderLink from '../HeaderLink/HeaderLink.jsx';
import {useContext} from 'react';
import {AuthContext} from '/src/context/AuthUser.context.jsx';

export default function Auth() {
	const {dispatch, authState} = useContext(AuthContext);

	function handleAuth() { 
		if (authState.isLogin) {
			dispatch({ type: 'LOGOUT', key: 'userData' });
		} else {
			console.log('Нажат вход');
		}
	}

	if (!authState.isLogin) {
		return (
			<HeaderLink onClick={handleAuth} icon='login'>
				Войти
			</HeaderLink>
		);
	}

	return (
		<>
			<HeaderLink icon="user">
				{authState.name}
			</HeaderLink>
			<HeaderLink onClick={handleAuth}>
					Выйти
			</HeaderLink>
		</>); 
}