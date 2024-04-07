import HeaderLink from '../HeaderLink/HeaderLink.tsx';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../../store/store.ts';
import {userActions} from '../../../store/User.slice.ts';

export default function Auth() {
	const dispatch = useDispatch<AppDispatch>();
	const user = useSelector((selector: RootState) => selector.user);

	function logOut() {
		dispatch(userActions.logout());
	}

	if (!user.isLogin) {
		return (
			<HeaderLink to='/login' icon='login'>
				Войти
			</HeaderLink>
		);
	}

	return (
		<>
			<HeaderLink to='/profile' icon="user">
				{user.name}
			</HeaderLink>
			<HeaderLink to='/login' onClick={logOut}>
					Выйти
			</HeaderLink>
		</>); 
}