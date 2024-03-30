import styles from './CardsField.module.css';
import CardFilm from '../CardFilm/CardFilm.tsx';
import {CardsFieldProps} from './CardsField.props.ts';

export default function CardsField(props: CardsFieldProps) {

	if (!props) {
		return;
	}

	return (
		<div className={styles.cardsField}>
			{props.results?.map(el => {
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