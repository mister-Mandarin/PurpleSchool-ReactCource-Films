import HeaderLink from '../../HeaderLink/HeaderLink.jsx';
import {useContext} from 'react';
import {AuthContext} from '/src/context/AuthUser.context.jsx';

export default function HeaderAuth() {

	const { state, dispatch } = useContext(AuthContext);

	function logOut() {
		dispatch({type: 'LOGOUT'});
	}

	return (
		<>
			{state.name.length > 0 &&
						<HeaderLink
							icon="user"
							linkName={state.name}
						/>}
			{state.isLogin &&
			<HeaderLink
				onClick={logOut}
				linkName='Выйти'
			/>}
			{!state.isLogin &&
			<HeaderLink
				icon='login'
				linkName='Войти'
			/>}
		</>);
}