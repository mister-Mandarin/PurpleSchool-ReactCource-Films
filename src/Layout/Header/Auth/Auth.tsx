import HeaderLink from '../HeaderLink/HeaderLink.tsx';
import {useContext} from 'react';
import {AuthContext} from '../../../context/AuthUser.context.tsx';

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
			<HeaderLink to='/login' onClick={handleAuth} icon='login'>
				Войти
			</HeaderLink>
		);
	}

	return (
		<>
			<HeaderLink to='/profile' icon="user">
				{authState.name}
			</HeaderLink>
			<HeaderLink to='/login' onClick={handleAuth}>
					Выйти
			</HeaderLink>
		</>); 
}