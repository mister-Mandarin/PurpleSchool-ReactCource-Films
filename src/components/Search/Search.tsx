import styles from './Search.module.css';
import {ChangeEvent, FormEvent, forwardRef} from 'react';
import Button from '../../components/Button/Button.tsx';
import TextTitle from '../../components/TextTitle/TextTitle.tsx';
import TextParagraph from '../TextParagraph/TextParagraph.tsx';
import cn from 'classnames';

interface SearchProps {
	searchFilms: (event: FormEvent<HTMLFormElement>) => void;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Search = forwardRef<HTMLInputElement, SearchProps>(
	function Input({searchFilms, ...props}, ref) {
		return (
			<div className={styles.search}>
				<TextTitle Tag='h1' className={styles.loginTitle}>
                Поиск
				</TextTitle>
				<TextParagraph styleParagraph='title'>
                Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.
				</TextParagraph>
				<form  className={styles.FormSearch} onSubmit={searchFilms}>
					<div className={styles.inputWrapper}>
						<img className={styles.icon} src="/search.svg" alt=""/>
						<input
							{...props}
							ref={ref}
							className={cn(styles.input, styles.inputIcon)}
						/>
					</div>
					<Button>Поиск</Button>
				</form>
			</div>
		);
	}
);

export default Search;