import styles from './CardFilm.module.css';
import CardFilmRate from './CardFilmRate/CardFilmRate.tsx';
import CardFilmFavorites from './CardFilmFavorites/CardFilmFavorites.tsx';
import {Link} from 'react-router-dom';
import {FilmData} from '../CardsField/CardsField.props.ts';

export default function CardFilm(props: FilmData) {

	return (
		<Link to={`/movie/${props.id}`} className={styles.link}>
			<div className={styles.card}>
				{props.releaseDate.year && <CardFilmRate rate={props.releaseDate.year}/>}
				<img src={props.primaryImage?.url} alt=""/>
				{props.originalTitleText.text && <span>{props.originalTitleText.text || ''}</span>}
				<CardFilmFavorites props={props}/>
			</div>
		</Link>
	);
}