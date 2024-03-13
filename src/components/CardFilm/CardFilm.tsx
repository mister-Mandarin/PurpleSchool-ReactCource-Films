import styles from './CardFilm.module.css';
import CardFilmRate from './CardFilmRate/CardFilmRate.tsx';
import CardFilmFavorites from './CardFilmFavorites/CardFilmFavorites.tsx';

interface CardFilmProps {
		rate?: number;
		img: string;
		title?: string;
		isFavorite: boolean;
}

export default function CardFilm({rate, img, title, isFavorite}: CardFilmProps) {

	return (
		<div className={styles.card}>
			{rate && <CardFilmRate rate={rate}/>}
			<img src={img} alt=""/>
			{title && <span>{title || ''}</span>}
			<CardFilmFavorites isFavorite={isFavorite}/>
		</div>
	);
}