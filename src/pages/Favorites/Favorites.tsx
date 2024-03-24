import TextTitle from '../../components/TextTitle/TextTitle.tsx';
import TextParagraph from '../../components/TextParagraph/TextParagraph.tsx';
import styles from '../../components/CardsField/CardsField.module.css';
import CardFilm from '../../components/CardFilm/CardFilm.tsx';

export default function Favorites() {

	if (!data) {
		return(
			<>
				<TextTitle Tag='h1'>
					Избранное
				</TextTitle>
				<TextParagraph styleParagraph='title'>
            Нет данных для отображения
				</TextParagraph>;
			</>
		);
	}

	return (
		<>
			<TextTitle Tag='h1'>
                Избранное
			</TextTitle>

			<div className={styles.cardsField}>
				{data.map(el => {
					if (el.id && el.isFavorite) {
						return (
							<CardFilm
								key={el.id}
								{...el}
							/>
						);
					}
				})}
			</div>
		</>
	);
}