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
		//устанавливаем начальное состояние с помощью функции
		() => {
			return getStorageValue() || USER_STATE_DEFAULT;
		}
	);

	// читаем по ключу КАЖДЫЙ РАЗ при рендере
	useEffect(() => {
		setAuthState(getStorageValue());
	}, [key]);

	function getStorageValue() {
		const data = JSON.parse(localStorage.getItem(key) || 'null');

		if (!data)  {
			localStorage.setItem(key, JSON.stringify(USER_STATE_DEFAULT));
			getStorageValue();
			return; 
		}
		return data;
	}

	function setStorageValue(data: string) {

		const value = {
			name: data,
			isLogin: true
		};

		localStorage.setItem(key, JSON.stringify(value));
		const store = JSON.parse(localStorage.getItem(key) || 'null');
		setAuthState(store);
	}

	function setDefaultValue() {
		localStorage.setItem(key, JSON.stringify(USER_STATE_DEFAULT));
		setAuthState(getStorageValue());
	}

	return {authState, setStorageValue, setDefaultValue};
};