import TextTitle from '../../components/TextTitle/TextTitle.tsx';
import Search from '../../components/Search/Search.tsx';
import TextParagraph from '../../components/TextParagraph/TextParagraph.tsx';
import styles from './Error.module.css';

export default function Error() {
	return (
		<>
			<Search />
			<div className={styles.errorPage}>
				<TextTitle Tag='h2' className={styles.errorTitle}>
					Упс... Ничего не найдено
				</TextTitle>
				<TextParagraph styleParagraph='card'>
					Попробуйте изменить запрос или ввести более точное название фильма
				</TextParagraph>
			</div>
		</>
	);
}