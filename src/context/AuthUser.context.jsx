import {createContext, useEffect, useReducer} from 'react';
import { actionsLoginForm, USER_STATE_DEFAULT } from '/src/FormLogin/FormLogin.state.js';
import {useLocalStorage} from '../hooks/useLocalStorage.js';

export const AuthContext = createContext(USER_STATE_DEFAULT);

export default function AuthUserContext({children}) {
	const [state, dispatch] = useReducer(actionsLoginForm, USER_STATE_DEFAULT);
	const {valueLocalstor, setValueLocalstor} = useLocalStorage('userData');

	useEffect(() => {
		setValueLocalstor(state);
		console.log('вызов');
	}, [state]);

	return <AuthContext.Provider value={{state, dispatch}}>
		{children}
	</AuthContext.Provider>;
}