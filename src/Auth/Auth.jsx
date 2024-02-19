import HeaderLink from '../HeaderLink/HeaderLink.jsx';
import {useContext} from 'react';
import {AuthContext} from '/src/context/AuthUser.context.jsx';
import {useLocalStorage} from '../hooks/useLocalStorage.js';

export default function Auth() {
	const {valueLocalstor, setValueLocalstor} = useLocalStorage('userData');
	const {state, dispatch } = useContext(AuthContext);

	function logOut() {
		dispatch({type: 'LOGOUT', key: 'userData'});
	}

	return (
		<>
			{valueLocalstor.isLogin &&
				<HeaderLink
					icon="user"
					linkName={valueLocalstor.name}
				/>}
			{valueLocalstor.isLogin ?
				<HeaderLink
					onClick={logOut}
					linkName='Выйти'
				/> :
				<HeaderLink
					icon='login'
					linkName='Войти'
				/>
			}
		</>);
}