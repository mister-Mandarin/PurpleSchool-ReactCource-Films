import {createContext, useEffect, useRef, useReducer} from 'react';
import { actionsLoginForm, USER_STATE_DEFAULT } from '/src/FormLogin/FormLogin.state.js';
import {useLocalStorage} from '../hooks/useLocalStorage.js';

export const AuthContext = createContext(USER_STATE_DEFAULT);

export default function AuthUserContext({children}) {
	const [state, dispatch] = useReducer(actionsLoginForm, USER_STATE_DEFAULT);
	const {authState, setAuthState} = useLocalStorage('userData');
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