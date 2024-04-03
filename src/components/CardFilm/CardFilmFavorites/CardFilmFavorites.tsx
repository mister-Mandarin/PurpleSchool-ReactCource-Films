import cn from 'classnames';
import styles from './CardFilmFavorites.module.css';
import React from 'react';

interface CardFilmFavoritesProps {
	isFavorite: boolean;
	className?:string;
	onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
} 

export default function CardFilmFavorites({isFavorite, className, ...props}: CardFilmFavoritesProps) {
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