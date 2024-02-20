import { useState, useEffect } from 'react';
import {USER_STATE_DEFAULT} from '/src/FormLogin/FormLogin.state.js';

export const useLocalStorage = (key) => {

	const [valueLocalstor, setValueLocalstor] = useState(
		// устанавливаем начальное состояние с помощью функции
		() => {
			return getStorageValue(key);
		});

	// читаем по ключу при рендере
	useEffect(() => {
		setValueLocalstor(getStorageValue(key));
	}, [key]);

	function getStorageValue(key) {
		const saved = JSON.parse(localStorage.getItem(key));
		if (saved === null) {
			return setStorageValue(USER_STATE_DEFAULT);
		}

		return saved;
	}

	function setStorageValue(state) {
		const setUserData = JSON.stringify(state);
		localStorage.setItem(key, setUserData);
		return state;
	}

	return { valueLocalstor, setValueLocalstor};
};