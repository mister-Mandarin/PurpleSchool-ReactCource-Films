import './CardsField.css';
import './data/data.json';
import Data from './data/data.json';
import CardFilm from '../CardFilm/CardFilm.jsx';
import TextParagraph from '../TextParagraph/TextParagraph.jsx';

export default function CardsField() {

	return (
		<div className='cards-field'>
			{Data && Data.length > 0 ?
				Data.map(el => (
					<CardFilm
						key={el.id}
						title={el.title}
						rate={el.rate}
						img={el.img}
						isFavorite={el.isFavorite}
					>
					</CardFilm>
				)) : <TextParagraph text={'Нет данных для отображения'}/>
			}
		</div>
	);
}