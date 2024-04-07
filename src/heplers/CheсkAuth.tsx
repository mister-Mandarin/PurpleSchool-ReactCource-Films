import {ReactNode} from 'react';
import {Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store.ts';

export default function CheckAuth({children}: { children: ReactNode }) {

	const user = useSelector((selector: RootState) => selector.user);

	if (!user.isLogin) {
		return <Navigate to={'/login'} replace/>;
	}

	return children;
}