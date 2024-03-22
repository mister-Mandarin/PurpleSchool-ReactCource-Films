import styles from './CardsField.module.css';
import CardFilm from '../CardFilm/CardFilm.tsx';
import {CardsFieldProps} from './CardsField.props.ts';
import Error from '../../pages/Error/Error.tsx';

export default function CardsField(props: CardsFieldProps) {

	if (!props.ok || !props) {
		console.log(props);
		return <Error />;
	}

	return (
		<div className={styles.cardsField}>
			{props.description.map(el => {
				if (el['#IMDB_ID']) {
					return (
						<CardFilm
							key={el['#IMDB_ID']}
							{...el}
						/>
					);
				}
			})}
		</div>
	);
}