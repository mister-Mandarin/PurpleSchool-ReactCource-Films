import { useState, useEffect } from 'react';
import {USER_STATE_DEFAULT} from '../FormLogin/FormLogin.state.ts';

interface LocalStorageProps {
	key: string;
}

interface AuthStateProps {
	isLogin: boolean;
	name: string;
}

export const useLocalStorage = ({key}: LocalStorageProps) => {

	const [authState, setAuthState] = useState<AuthStateProps>(
		// устанавливаем начальное состояние с помощью функции
		() => {
			return getStorageValue(key);
		});

	// читаем по ключу при рендере
	useEffect(() => {
		setAuthState(getStorageValue(key));
	}, [key]);

	function getStorageValue(storageKey: string) {
		const saved = JSON.parse(localStorage.getItem(storageKey) || '');
		if (saved === null) {
			return setStorageValue(USER_STATE_DEFAULT);
		}

		return saved;
	}

	function setStorageValue(state: AuthStateProps) {
		const setUserData = JSON.stringify(state);
		localStorage.setItem(key, setUserData);
		return state;
	}

	return {authState, setAuthState};
};