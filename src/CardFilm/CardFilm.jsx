import styles from './CardFilm.module.css';
import CardFilmRate from './CardFilmRate/CardFilmRate.jsx';
import CardFilmFavorites from './CardFilmFavorites/CardFilmFavorites.jsx';


export default function CardFilm({el}) {

	const {rate, img, title, isFavorite} = el;

	return (
		<div className={styles.card}>
			{rate && <CardFilmRate rate={rate}/>}
			<img src={img} alt=""/>
			{title && <span>{title || ''}</span>}
			<CardFilmFavorites isFavorite={isFavorite}/>
		</div>
	);
}