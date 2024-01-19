import './CardFilm.css';

export default function CardFilm({rate, img, name, isFavorite= false}) {
	return (
		<div className='card'>
			<div className='card-rate'>
				<img src="/star.svg" alt="raiting"/>
				<span>{rate}</span>
			</div>
			<img src={img} alt=""/>
			<span>{name}</span>
			{!isFavorite && <div className='favorite favorite-false'>
				<img src="/like.svg" alt=""/>
				<span>В избранное</span>
			</div>}
			{isFavorite && <div className='favorite favorite-true'>
				<img src="/bookmark.svg" alt=""/>
				<span>В избранном</span>
			</div>}
		</div>
	);
}