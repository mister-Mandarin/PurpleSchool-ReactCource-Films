import styles from './CardFilm.module.css';
import CardFilmRate from './CardFilmRate/CardFilmRate.tsx';
import CardFilmFavorites from './CardFilmFavorites/CardFilmFavorites.tsx';
import {Link} from 'react-router-dom';
import {FilmData} from '../CardsField/CardsField.props.ts';

export default function CardFilm(props: FilmData) {

	return (
		<Link to={`/movie/${props.id}`} className={styles.link}>
			<div className={styles.card}>
				{props.rate && <CardFilmRate rate={props.rate}/>}
				<img src={props.img} alt=""/>
				{props.title && <span>{props.title || ''}</span>}
				<CardFilmFavorites isFavorite={props.isFavorite}/>
			</div>
		</Link>
	);
}