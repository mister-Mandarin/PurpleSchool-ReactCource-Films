import styles from './CardFilm.module.css';
import CardFilmRate from './CardFilmRate/CardFilmRate.tsx';
import CardFilmFavorites from './CardFilmFavorites/CardFilmFavorites.tsx';
import {Link} from 'react-router-dom';
import {FilmData} from '../CardsField/CardsField.props.ts';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store/store.ts';
import {favoriteActions} from '../../store/Favorite.slice.ts';

export default function CardFilm(props: FilmData) {

	const [favorite, setFavorite] = useState<boolean>(false);
	const dispatch = useDispatch<AppDispatch>();
	const favoriteItem = useSelector((selector: RootState) => selector.favorite);

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

	useEffect(() => {
		const index = favoriteItem.findIndex((item: FilmData) => item.id === props.id);
		if (index !== -1) {
			setFavorite(!favorite);
		}
	}, []);

	return (
		<Link to={`/movie/${props.id}`} className={styles.link}>
			<div className={styles.card}>
				{props.position && <CardFilmRate rate={props.position}/>}
				<img src={props.primaryImage?.url} alt=""/>
				{props.originalTitleText.text && <span>{props.originalTitleText.text || ''}</span>}
				<CardFilmFavorites isFavorite={favorite} onClick={handleClick}/>
			</div>
		</Link>
	);
}