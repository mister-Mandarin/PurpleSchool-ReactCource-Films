import {createContext, useEffect, useRef, useReducer} from 'react';
import { actionsLoginForm, USER_STATE_DEFAULT } from '/src/FormLogin/FormLogin.state.js';
import {useLocalStorage} from '../hooks/useLocalStorage.js';

export const AuthContext = createContext(USER_STATE_DEFAULT);

export default function AuthUserContext({children}) {
	const [state, dispatch] = useReducer(actionsLoginForm, USER_STATE_DEFAULT);
	const {valueLocalstor, setValueLocalstor} = useLocalStorage('userData');
	const prevIsLoginRef = useRef(state.isLogin);

	// идея от chatGPT, сам бы я до конца месяца думал как сохранить предыдущее состояние
	useEffect(() => {
		// Обновляем localStorage только если состояние isLogin изменилось
		if (state.isLogin !== prevIsLoginRef.current) {
			setValueLocalstor(state);
			prevIsLoginRef.current = state.isLogin;
		}

	}, [state, valueLocalstor, setValueLocalstor]);

	return <AuthContext.Provider value={{state, dispatch, valueLocalstor, setValueLocalstor}}>
		{children}
	</AuthContext.Provider>;
}