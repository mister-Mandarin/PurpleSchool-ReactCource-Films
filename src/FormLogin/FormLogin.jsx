import styles from './FormLogin.module.css';
import Input from '../components/Input/Input.tsx';
import {useContext, useRef} from 'react';
import Button from '../components/Button/Button.jsx';
import TextTitle from '../components/TextTitle/TextTitle.tsx';
import {AuthContext} from '../context/AuthUser.context.tsx';

export default function FormLogin() {
	const {state, dispatch } = useContext(AuthContext);
	const inputRef = useRef(null);

	function personLogin(e) {
		e.preventDefault();
		dispatch({type: 'LOGIN', key: 'userData'});
	}

	function onChange(e) {
		dispatch({type: 'UPDATE_NAME', data: e.target.value});
	}

	return (
		<form  className={styles.loginForm} onSubmit={personLogin}>
			<TextTitle Tag='h1' className={styles.loginTitle}>
				Вход
			</TextTitle>
			<Input
				placeholder='Ваше имя'
				name='loginName'
				ref={inputRef}
				value={state.name}
				onChange={onChange}
			/>
			<Button>Войти в профиль</Button>
		</form>
	);
}