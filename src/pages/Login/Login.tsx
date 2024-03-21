import styles from './Login.module.css';
import Input from '../../components/Input/Input.tsx';
import {FormEvent, useContext, useState} from 'react';
import Button from '../../components/Button/Button.tsx';
import TextTitle from '../../components/TextTitle/TextTitle.tsx';
import {AuthContext} from '../../context/AuthUser.context.tsx';
import {useLocalStorage} from '../../hooks/useLocalStorage.ts';
import {LoginForm} from './Login.props.ts';
import TextParagraph from '../../components/TextParagraph/TextParagraph.tsx';

export default function Login() {
	//const {state, dispatch } = useContext(AuthContext);
	const [error, setError] = useState<boolean>(false);
	//const inputRef = useRef(null);
	const {setStorageValue} = useContext(AuthContext);

	async function personLogin(e: FormEvent) {
		e.preventDefault();
		//console.log(e.target.loginName.value);
		//dispatch({type: 'LOGIN', key: 'userData'});
		const {loginName} = e.target as typeof e.target & LoginForm;
		console.log('loginName.value ',loginName.value);
		if (!loginName.value) {
			setError(true);
		} else {
			setError(false);
			setStorageValue(loginName.value);
		}
	}

	return (
		<form  className={styles.loginForm} onSubmit={personLogin}>
			<TextTitle Tag='h1'>
				Вход
			</TextTitle>
			{error && <TextParagraph styleParagraph='title'>Форма не заполнена!!!!</TextParagraph>}
			<Input
				id='loginName'
				type='text'
				placeholder='Ваше имя'
				name='loginName'
				//ref={inputRef}
				//value={state.name}
				//onChange={onChange}
			/>
			<Button>Войти в профиль</Button>
		</form>
	);
}