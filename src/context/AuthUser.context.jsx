import {createContext, useEffect, useState} from 'react';
import {useLocalStorage} from '../hooks/useLocalStorage.js';

export const AuthContext = createContext({
	// начальное значение
	name: null,
	isLogin: false
});

export default function AuthUserContext({children}) {
	const {value} = useLocalStorage('userData');
	const [auth, setAuth] = useState({
		name: value.name,
		isLogin: value.isLogin
	});

	useEffect(() => {
		updateAuth();
		console.log('вызов контекста');
	},[]);

	function updateAuth() {
		const newValue = value || {
			name: null,
			isLogin: false
		};

		setAuth({
			name: newValue.name,
			isLogin: newValue.isLogin
		});
	}

	return <AuthContext.Provider value={{auth, setAuth,updateAuth}}>
		{children}
	</AuthContext.Provider>;
}