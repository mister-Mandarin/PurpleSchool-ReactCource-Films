import styles from './CardFilm.module.css';
import CardFilmRate from './CardFilmRate/CardFilmRate.tsx';
import CardFilmFavorites from './CardFilmFavorites/CardFilmFavorites.tsx';
import {Link} from 'react-router-dom';
import {FilmData} from '../CardsField/CardsField.props.ts';

export default function CardFilm(props: FilmData) {

	return (
		<Link to={`/movie/${props['#IMDB_ID']}`} className={styles.link}>
			<div className={styles.card}>
				{props['#RANK'] && <CardFilmRate rate={props['#RANK']}/>}
				<img src={props['#IMG_POSTER']} alt=""/>
				{props['#TITLE'] && <span>{props['#TITLE'] || ''}</span>}
				<CardFilmFavorites isFavorite={false}/>
			</div>
		</Link>
	);
}