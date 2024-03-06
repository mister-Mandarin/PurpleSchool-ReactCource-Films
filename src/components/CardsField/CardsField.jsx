import styles from './CardsField.module.css';
import CardFilm from '../CardFilm/CardFilm.jsx';
import TextParagraph from '../TextParagraph/TextParagraph.tsx';

export default function CardsField({data}) {

	if (!data) {
		return <TextParagraph>Нет данных для отображения</TextParagraph>;
	}

	return (
		<div className={styles.cardsField}>
			{data.map(el => {
				if (el.id) {
					return (
						<CardFilm
							key={el.id}
							el={el}
						/>
					);
				}
			})}
		</div>
	);
}