import styles from './CardFilm.module.css';
import CardFilmRate from './CardFilmRate/CardFilmRate.tsx';
import CardFilmFavorites from './CardFilmFavorites/CardFilmFavorites.tsx';

interface CardFilmProps {
	el: {
		rate?: number;
		img: string;
		title?: string;
		isFavorite: boolean;
	};
}

export default function CardFilm({el}: CardFilmProps) {

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