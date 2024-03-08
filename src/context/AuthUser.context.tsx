import {createContext, useEffect, useRef, useReducer} from 'react';
import { actionsLoginForm, USER_STATE_DEFAULT } from '../FormLogin/FormLogin.state.ts';
import {useLocalStorage} from '../hooks/useLocalStorage.ts';
import {AuthUserProps} from './AuthUser.props.ts';

export const AuthContext = createContext(USER_STATE_DEFAULT);

export default function AuthUserContext({children}: AuthUserProps) {

	const [state, dispatch] = useReducer(
		actionsLoginForm,
		USER_STATE_DEFAULT
	);
	const {authState, setAuthState} = useLocalStorage({key: 'userData'});
	const prevIsLoginRef = useRef(state.isLogin);

	useEffect(() => {
		if (state.isLogin !== prevIsLoginRef.current) {
			setAuthState(state);
			prevIsLoginRef.current = state.isLogin;
		}

	}, [state, authState, setAuthState]);

	return <AuthContext.Provider value={{state, dispatch, authState, setAuthState}}>
		{children}
	</AuthContext.Provider>;
}