import HeaderLink from '../HeaderLink/HeaderLink.jsx';
import {useContext} from 'react';
import {AuthContext} from '/src/context/AuthUser.context.jsx';

export default function Auth() {
	const {dispatch, authState} = useContext(AuthContext);

	function logOut() {
		dispatch({type: 'LOGOUT', key: 'userData'});
	}

	function logIn() {
		console.log('Нажат вход');
	}

	return (
		<>
			{authState.isLogin &&
				<HeaderLink icon="user">
					{authState.name}
				</HeaderLink>}
			{authState.isLogin ?
				<HeaderLink onClick={logOut}>
					Выйти
				</HeaderLink> :
				<HeaderLink onClick={logIn} icon='login'>
					Войти
				</HeaderLink>
			}
		</>);
}