import cn from 'classnames';
import styles from './CardFilmFavorites.module.css';
import React, {useEffect, useState} from 'react';
import {favoriteActions} from '../../../store/Favorite.slice.ts';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../../store/store.ts';
import {FilmData} from '../../CardsField/CardsField.props.ts';

interface CardFilmFavoritesProps {
	props: FilmData
	className?:string;
}

export default function CardFilmFavorites({props, className}: CardFilmFavoritesProps) {

	const dispatch = useDispatch<AppDispatch>();
	const favoriteItem = useSelector((selector: RootState) => selector.favorite);
	const [favorite, setFavorite] = useState<boolean>(false);
	
	useEffect(() => {
		const index = favoriteItem.findIndex((item: FilmData) => item.id == props.id);
		if (index !== -1) {
			setFavorite(!favorite);
		}
	}, []);

	function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		e.preventDefault();
		e.stopPropagation();
		setFavorite(!favorite);
		if (favorite) {
			dispatch(favoriteActions.removeFavorite(props));
			return;
		} else {
			dispatch(favoriteActions.addFavorite(props));
		}
	}

	return (
		<div onClick={handleClick} className={cn(styles.favorite, className, {
			[styles.favoriteTrue]: favorite,
			[styles.favoriteFalse]: !favorite
		}
		)}>
			{!favorite &&
				<>
					<img src="/like.svg" alt=""/>
					<span>В избранное</span>
				</>}
			{favorite &&
				<>
					<img src="/bookmarkGreen.svg" alt=""/>
					<span>В избранном</span>
				</>}
		</div>
	);
}