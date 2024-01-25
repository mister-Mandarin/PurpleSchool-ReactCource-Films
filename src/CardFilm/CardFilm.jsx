import './CardFilm.css';
import CardFilmRate from './CardFilmRate/CardFilmRate.jsx';

export default function CardFilm({rate, img, title, isFavorite}) {

	let cl = 'favorite ' + (isFavorite ? 'favorite-true' : 'favorite-false');

	return (
		<div className='card'>
			<CardFilmRate rate={rate}/>
			<img src={img} alt=""/>
			{title && <span>{title}</span>}
			<div className={cl}>
				{!isFavorite &&
				<>
					<img src="/like.svg" alt=""/>
					<span>В избранное</span>
				</>}
				{isFavorite &&
					<>
						<img src="/bookmarkGreen.svg" alt=""/>
						<span>В избранном</span>
					</>}
			</div>
		</div>
	);
}