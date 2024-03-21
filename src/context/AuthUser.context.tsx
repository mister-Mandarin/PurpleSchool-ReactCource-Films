import {createContext, useEffect, useReducer, Reducer} from 'react';
import { actionsLoginForm, USER_STATE_DEFAULT } from '../pages/Login/Login.state.ts';
import {useLocalStorage} from '../hooks/useLocalStorage.ts';
import {AuthUserContextType, AuthUserProps} from './AuthUser.props.ts';
import {ActionProps, StateProps} from '../pages/Login/Login.props.ts';
import data from '../components/CardsField/data/data.json';

export const AuthContext = createContext<AuthUserContextType>({} as AuthUserContextType);

export default function AuthUserContext({children}: AuthUserProps) {

	const [state, dispatch] = useReducer<Reducer<StateProps, ActionProps>>(
		actionsLoginForm,
		USER_STATE_DEFAULT
	);
	const {authState, setAuthState} = useLocalStorage({key: 'userData'});

	useEffect(() => {
		// setAuthState(state);
		//dispatch({type: 'LOGIN', key: 'userData'});
		console.log('authState', authState);
	}, [authState, state]);

	return <AuthContext.Provider value={{state, dispatch, authState, setAuthState, data}}>
		{children}
	</AuthContext.Provider>;
}