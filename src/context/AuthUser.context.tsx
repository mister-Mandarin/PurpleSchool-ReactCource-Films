import {createContext, useEffect, useRef, useReducer, Reducer} from 'react';
import { actionsLoginForm, USER_STATE_DEFAULT } from '../FormLogin/FormLogin.state.ts';
import {useLocalStorage} from '../hooks/useLocalStorage.ts';
import {AuthUserContextType, AuthUserProps} from './AuthUser.props.ts';
import {ActionProps, StateProps} from '../FormLogin/FormLogin.props.ts';

export const AuthContext = createContext<AuthUserContextType>({} as AuthUserContextType);

export default function AuthUserContext({children}: AuthUserProps) {

	const [state, dispatch] = useReducer<Reducer<StateProps, ActionProps>>(
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