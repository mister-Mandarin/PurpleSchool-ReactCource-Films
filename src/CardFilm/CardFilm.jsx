import './CardFilm.css';

export default function CardFilm({rate, img, title, isFavorite}) {

	let cl = 'favorite ' + (isFavorite ? 'favorite-true' : 'favorite-false');

	return (
		<div className='card'>
			<div className='card-rate'>
				<img src="/star.svg" alt=""/>
				<span>{rate}</span>
			</div>
			<img src={img} alt=""/>
			<span>{title}</span>
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