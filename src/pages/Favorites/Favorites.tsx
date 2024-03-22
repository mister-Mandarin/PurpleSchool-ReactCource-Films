import TextTitle from '../../components/TextTitle/TextTitle.tsx';
import {useContext} from 'react';
import {AuthContext} from '../../context/AuthUser.context.tsx';
import TextParagraph from '../../components/TextParagraph/TextParagraph.tsx';
import styles from '../../components/CardsField/CardsField.module.css';
import CardFilm from '../../components/CardFilm/CardFilm.tsx';

export default function Favorites() {

	const {data} = useContext(AuthContext);

	if (!data) {
		return <TextParagraph styleParagraph='title'>
            Нет данных для отображения
		</TextParagraph>;
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