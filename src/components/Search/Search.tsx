import styles from './Search.module.css';
import Input from '../../components/Input/Input.tsx';
import {useRef} from 'react';
import Button from '../../components/Button/Button.tsx';
import TextTitle from '../../components/TextTitle/TextTitle.tsx';
import TextParagraph from '../TextParagraph/TextParagraph.tsx';

export default function Search() {
	// const {state, dispatch } = useContext(AuthContext);
	const inputRef = useRef(null);
	//
	// function personLogin(e: FormEvent<HTMLFormElement>) {
	// 	e.preventDefault();
	// 	dispatch({type: 'LOGIN', key: 'userData'});
	// }
	//
	// function onChange(e: ChangeEvent<HTMLInputElement>) {
	// 	dispatch({type: 'UPDATE_NAME', data: e.target.value});
	// }

	return (
		<div className={styles.search}>
			<TextTitle Tag='h1' className={styles.loginTitle}>
                Поиск
			</TextTitle>
			<TextParagraph styleParagraph='title'>
                Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.
			</TextParagraph>
			<form  className={styles.FormSearch}>
				<Input
					icon={true}
					placeholder='Введите название'
					name='search'
					ref={inputRef}
				/>
				<Button>Поиск</Button>
			</form>
		</div>
	);
}