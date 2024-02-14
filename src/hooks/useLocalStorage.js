import { useState, useEffect } from 'react';

const DEFAULT_STORAGE = {
	name: '',
	isLogin: false
};

export const useLocalStorage = (key) => {
	const [value, setValue] = useState(() => {
		return getStorageValue(key);
	});

	// читаем по ключу
	useEffect(() => {
		const storedData = JSON.parse(localStorage.getItem(key));

		if (Array.isArray(storedData)) {
			setValue(storedData);
		}
	}, [key]);

	return { value, setValue };
};

function getStorageValue(key) {

	const saved = localStorage.getItem(key);
	return saved !== null ? JSON.parse(saved) : DEFAULT_STORAGE;
}



