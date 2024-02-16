import cn from 'classnames';
import styles from './CardFilmFavorites.module.css';

export default function CardFilmFavorites({isFavorite}) {
	return (
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
	);
}