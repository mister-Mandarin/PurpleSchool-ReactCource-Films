import TextTitle from '../../components/TextTitle/TextTitle.tsx';
import TextParagraph from '../../components/TextParagraph/TextParagraph.tsx';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store.ts';
import CardFilm from '../../components/CardFilm/CardFilm.tsx';
import styles from './Favorites.module.css';
import {FilmData} from '../../components/CardsField/CardsField.props.ts';

export default function Favorites() {

	const favoriteItem = useSelector((selector: RootState) => selector.favorite);

	if (!favoriteItem) {
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
				{favoriteItem.map((el: FilmData) => {
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
		</>
	);
}