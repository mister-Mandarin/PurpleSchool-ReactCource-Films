import { useState, useEffect } from 'react';
import {USER_STATE_DEFAULT} from '/src/FormLogin/FormLogin.state.js';

export const useLocalStorage = (key) => {
	const [value, setValue] = useState(() => {
		return getStorageValue(key);
	});

	// читаем по ключу при рендере
	useEffect(() => {
		setValue(getStorageValue(key));
	}, [key]);

	function getStorageValue(key) {
		const saved = JSON.parse(localStorage.getItem(key));
		return saved !== null ? saved : USER_STATE_DEFAULT;
	}

	function setStorageValue(state) {
		const setUserData = JSON.stringify(state);
		console.log('setUserData ', setUserData);
		localStorage.setItem(key, setUserData);
		return state;
	}

	return { value, setValue, setStorageValue};
};