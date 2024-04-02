import styles from './Login.module.css';
import Input from '../../components/Input/Input.tsx';
import {FormEvent, useState} from 'react';
import Button from '../../components/Button/Button.tsx';
import TextTitle from '../../components/TextTitle/TextTitle.tsx';
import TextParagraph from '../../components/TextParagraph/TextParagraph.tsx';
import {useNavigate} from 'react-router-dom';
import {AppDispatch} from '../../store/store.ts';
import {useDispatch} from 'react-redux';
import {userActions} from '../../store/User.slice.ts';

export default function Login() {
	const [error, setError] = useState<boolean>(false);
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();

	interface LoginForm {
		loginName: {
			value: string;
		}
	}

	async function personLogin(e: FormEvent) {
		e.preventDefault();
		const {loginName} = e.target as typeof e.target & LoginForm;

		if (!loginName.value) {
			setError(true);
		} else {
			setError(false);
			dispatch(userActions.login(loginName.value));
			navigate('/');
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
			/>
			<Button>Войти в профиль</Button>
		</form>
	);
}