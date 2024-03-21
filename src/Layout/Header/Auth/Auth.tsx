import HeaderLink from '../HeaderLink/HeaderLink.tsx';
import {useContext} from 'react';
import {AuthContext} from '../../../context/AuthUser.context.tsx';

export default function Auth() {
	const {dispatch, authState} = useContext(AuthContext);

	function logOut() {
		if (authState.isLogin) {
			dispatch({ type: 'LOGOUT', key: 'userData' });
		}
	}

	if (!authState.isLogin) {
		return (
			<HeaderLink to='/login' icon='login'>
				Войти
			</HeaderLink>
		);
	}

	return (
		<>
			<HeaderLink to='/profile' icon="user">
				{authState.name}
			</HeaderLink>
			<HeaderLink to='/login' onClick={logOut}>
					Выйти
			</HeaderLink>
		</>); 
}