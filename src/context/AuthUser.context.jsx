import {createContext, useReducer, useState} from 'react';
import { actionsLoginForm, USER_STATE_DEFAULT } from '/src/FormLogin/FormLogin.state.js';

export const AuthContext = createContext(USER_STATE_DEFAULT);

export default function AuthUserContext({children}) {
	const [state, dispatch] = useReducer(actionsLoginForm, USER_STATE_DEFAULT);
	const [auth, setAuth] = useState({});

	return <AuthContext.Provider value={{state, dispatch, auth, setAuth}}>
		{children}
	</AuthContext.Provider>;
}