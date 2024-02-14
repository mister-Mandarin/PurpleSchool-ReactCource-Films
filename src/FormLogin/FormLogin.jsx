import styles from './FormLogin.module.css';
import Input from '../Input/Input.jsx';
import {useReducer, useRef} from 'react';
import Button from '../Button/Button.jsx';
import TextTitle from '../TextTitle/TextTitle.jsx';
import {USER_STATE, actionsLoginForm} from './FormLogin.state.js';

export default function FormLogin() {

	const [state, dispatch] = useReducer(actionsLoginForm, USER_STATE);
	const inputRef = useRef(null);

	const {userData} = state;

	function personLogin(e) {
		e.preventDefault();
		dispatch({type: 'WRITE_TO_LOCALSTORAGE'});
		dispatch({type: 'LOGIN'});
	}

	function onChange(e) {
		dispatch({type: 'UPDATE_NAME', data: e.target.value});
	}

	return (
		<form  className={styles.loginForn} onSubmit={personLogin}>
			<TextTitle Tag={'h1'} text={'Вход'} className={styles.loginTitle} />
			<Input
				placeholder={'Ваше имя'}
				ref={inputRef}
				value={userData.name}
				onChange={onChange}
				name='loginName'
			/>
			<Button name={'Войти в профиль'} />
		</form>
	);
}