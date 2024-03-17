import { useState, useEffect } from 'react';
import {USER_STATE_DEFAULT} from '../pages/Login/Login.state.ts';
import {StateProps} from '../pages/Login/Login.props.ts';

interface LocalStorageProps {
	key: string;
}

export const useLocalStorage = ({key}: LocalStorageProps) => {

	const [authState, setAuthState] = useState<StateProps>(
		// устанавливаем начальное состояние с помощью функции
		() => {
			return getStorageValue(key);
		});

	// читаем по ключу при рендере
	useEffect(() => {
		setAuthState(getStorageValue(key));
	}, [key]);

	function getStorageValue(storageKey: string) {
		const saved = JSON.parse(localStorage.getItem(storageKey) || 'null');
		if (saved === null)  {
			return setStorageValue(USER_STATE_DEFAULT);
		}

		return saved;
	}

	function setStorageValue(state: StateProps) {
		const setUserData = JSON.stringify(state);
		localStorage.setItem(key, setUserData);
		return state;
	}

	return {authState, setAuthState};
};