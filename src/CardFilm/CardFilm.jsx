import './CardFilm.css';
import {useState} from 'react';

export default function CardFilm({rate, img, title}) {

	const [addFavorite, setAddFavorite] = useState(false);

	let cl = 'favorite ' + (addFavorite ? 'favorite-true' : 'favorite-false');

	function changeFavorite() {
		setAddFavorite(!addFavorite);
	}

	return (
		<div className='card'>
			<div className='card-rate'>
				<img src="/star.svg" alt="raiting"/>
				<span>{rate}</span>
			</div>
			<img src={img} alt=""/>
			<span>{title}</span>
			<div className={cl} onClick={changeFavorite}>
				{!addFavorite &&
				<>
					<img src="/like.svg" alt=""/>
					<span>В избранное</span>
				</>}
				{addFavorite &&
					<>
						<img src="/bookmarkGreen.svg" alt=""/>
						<span>В избранном</span>
					</>}
			</div>
		</div>
	);
}