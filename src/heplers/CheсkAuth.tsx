import {ReactNode, useContext} from 'react';
import {Navigate} from 'react-router-dom';
import {AuthContext} from '../context/AuthUser.context.tsx';

export default function CheckAuth({children}: { children: ReactNode }) {

	const { authState} = useContext(AuthContext);

	if (!authState.isLogin) {
		return <Navigate to={'/login'} replace/>;
	}

	return children;
}