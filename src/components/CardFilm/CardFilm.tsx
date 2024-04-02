import styles from './CardFilm.module.css';
import CardFilmRate from './CardFilmRate/CardFilmRate.tsx';
import CardFilmFavorites from './CardFilmFavorites/CardFilmFavorites.tsx';
import {Link} from 'react-router-dom';
import {FilmData} from '../CardsField/CardsField.props.ts';
import {useState} from 'react';

export default function CardFilm(props: FilmData) {

	const [favorite, setFavorite] = useState<boolean>(false);

	function handleClick(e: MouseEvent) {
		e.preventDefault();
		e.stopPropagation();
		setFavorite(!favorite);
	}

	return (
		<Link to={`/movie/${props.id}`} className={styles.link}>
			<div className={styles.card}>
				{props.position && <CardFilmRate rate={props.position}/>}
				<img src={props.primaryImage?.url} alt=""/>
				{props.originalTitleText.text && <span>{props.originalTitleText.text || ''}</span>}
				<CardFilmFavorites isFavorite={favorite} onClick={handleClick}/>
			</div>
		</Link>
	);
}