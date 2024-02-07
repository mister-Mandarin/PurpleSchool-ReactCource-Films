import styles from './CardsField.module.css';
import CardFilm from '../CardFilm/CardFilm.jsx';
import TextParagraph from '../TextParagraph/TextParagraph.jsx';

export default function CardsField({Data}) {

	if (!Data || !Data.length) {
		return (
			<TextParagraph text={'Нет данных для отображения'}/>
		);
	} 

	return (
		<div className={styles.cardsField}>
			{Data.map(el => {
				if (el.id && el.title && el.rate && el.img) {
					return (
						<CardFilm
							key={el.id}
							title={el.title}
							rate={el.rate}
							img={el.img}
							isFavorite={el.isFavorite}
						/>
					);
				}
			})}
		</div>
	);
}