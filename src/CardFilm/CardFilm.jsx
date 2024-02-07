import styles from './CardFilm.module.css';
import CardFilmRate from './CardFilmRate/CardFilmRate.jsx';
import cn from 'classnames';


export default function CardFilm({rate, img, title, isFavorite}) {

	return (
		<div className={styles.card}>
			<CardFilmRate rate={rate}/>
			<img src={img} alt=""/>
			{title && <span>{title}</span>}
			<div className={cn(styles.favorite, {
				[styles.favoriteTrue]: isFavorite,
				[styles.favoriteFalse]: !isFavorite
			}
			)}>
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