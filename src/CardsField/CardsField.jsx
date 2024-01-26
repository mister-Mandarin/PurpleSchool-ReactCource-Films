import './CardsField.css';
import './data/data.json';
import Data from './data/data.json';
import CardFilm from '../CardFilm/CardFilm.jsx';
import TextParagraph from '../TextParagraph/TextParagraph.jsx';

export default function CardsField() {

	if (!Data.length) {
		return (
			<TextParagraph text={'Нет данных для отображения'}/>
		);
	} 

	return (
		<div className='cards-field'>
			{Data.map(el => (
				<CardFilm
					key={el.id}
					title={el.title}
					rate={el.rate}
					img={el.img}
					isFavorite={el.isFavorite}
				/>
			))}
		</div>
	);
}