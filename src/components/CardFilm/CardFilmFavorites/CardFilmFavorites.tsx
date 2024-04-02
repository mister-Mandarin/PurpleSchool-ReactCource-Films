import cn from 'classnames';
import styles from './CardFilmFavorites.module.css';

interface CardFilmFavoritesProps {
	isFavorite: boolean;
	className?:string;
}

export default function CardFilmFavorites<CardFilmFavoritesProps>({isFavorite, className, ...props}) {
	return (
		<div {...props} className={cn(styles.favorite, className, {
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