import './CardsField.css';
import Data from './data/data.json';
import CardFilm from '../CardFilm/CardFilm.jsx';
import TextParagraph from '../TextParagraph/TextParagraph.jsx';

export default function CardsField() {

	if (!Data || !Data.length) {
		return (
			<TextParagraph text={'Нет данных для отображения'}/>
		);
	} 

	return (
		<div className='cards-field'>
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