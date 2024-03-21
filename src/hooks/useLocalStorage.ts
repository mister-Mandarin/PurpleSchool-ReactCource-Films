import { useState, useEffect } from 'react';
import {StateProps} from '../pages/Login/Login.props.ts';

interface LocalStorageProps {
	key: string;
}

export const USER_STATE_DEFAULT: StateProps = {
	name:'',
	isLogin: false
};

export const useLocalStorage = ({key}: LocalStorageProps) => {

	const [authState, setAuthState] = useState<StateProps>(
		// устанавливаем начальное состояние с помощью функции
		() => {
			return getStorageValue(key);
		});

	// читаем по ключу КАЖДЫЙ РАЗ при рендере
	useEffect(() => {
		setAuthState(getStorageValue(key));
	}, [key]);

	function getStorageValue(key: string) {
		const data = JSON.parse(localStorage.getItem(key) || 'null');
		if (data === null)  {
			localStorage.setItem(key, JSON.stringify(USER_STATE_DEFAULT));
		}
		return data;
	}

	function setStorageValue(data: string) {

		const value = {
			name: data,
			isLogin: true
		};

		localStorage.setItem(key, JSON.stringify(value));
		setAuthState(getStorageValue(key));
	}

	return {authState, setStorageValue};
};