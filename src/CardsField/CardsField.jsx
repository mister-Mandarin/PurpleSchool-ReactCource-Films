import styles from './CardsField.module.css';
import CardFilm from '../CardFilm/CardFilm.jsx';
import TextParagraph from '../TextParagraph/TextParagraph.jsx';

export default function CardsField({data}) {

	if (!data) {
		return (
			<TextParagraph text={'Нет данных для отображения'}/>
		);
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