import HeaderLink from '../HeaderLink/HeaderLink.tsx';
import {useContext} from 'react';
import {AuthContext} from '../../../context/AuthUser.context.tsx';

export default function Auth() {
	const {setDefaultValue, authState} = useContext(AuthContext);

	function logOut() {
		setDefaultValue();
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