import styles from './FormLogin.module.css';
import Input from '../Input/Input.jsx';
import {useContext, useRef} from 'react';
import Button from '../Button/Button.jsx';
import TextTitle from '../TextTitle/TextTitle.jsx';
import {AuthContext} from '../context/AuthUser.context.jsx';

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
			<TextTitle Tag={'h1'} text={'Вход'} className={styles.loginTitle} />
			<Input
				placeholder={'Ваше имя'}
				ref={inputRef}
				value={state.name}
				onChange={onChange}
				name='loginName'
			/>
			<Button>Войти в профиль</Button>
		</form>
	);
}