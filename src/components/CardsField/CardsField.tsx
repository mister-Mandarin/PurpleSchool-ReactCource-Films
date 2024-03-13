import styles from './CardsField.module.css';
import CardFilm from '../CardFilm/CardFilm.tsx';
import TextParagraph from '../TextParagraph/TextParagraph.tsx';
import {CardsFieldProps} from './CardsField.props.ts';

export default function CardsField({data}: CardsFieldProps) {

	if (!data) {
		return <TextParagraph styleParagraph='title'>
			Нет данных для отображения
		</TextParagraph>;
	}

	return (
		<div className={styles.cardsField}>
			{data.map(el => {
				if (el.id) {
					return (
						<CardFilm
							key={el.id}
							{...el}
						/>
					);
				}
			})}
		</div>
	);
}