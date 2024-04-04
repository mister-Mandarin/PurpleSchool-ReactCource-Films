import TextTitle from '../TextTitle/TextTitle.tsx';
import {FilmData} from '../CardsField/CardsField.props.ts';
import CardFilmRate from '../CardFilm/CardFilmRate/CardFilmRate.tsx';
import CardFilmFavorites from '../CardFilm/CardFilmFavorites/CardFilmFavorites.tsx';
import styles from './CardItem.module.css';
import TextParagraph from '../TextParagraph/TextParagraph.tsx';

export default function CardItem(props: { results: FilmData }) {

	const filmData = props.results;

	return (
		<article>
			<header className={styles.cardItemHeader}>
				<span className={styles.subTitle}>Название фильма</span>
				<TextTitle className={styles.title} Tag='h2'>{filmData.titleText.text}</TextTitle>
			</header>
			<div className={styles.cardItemContent}>
				<img src={filmData.primaryImage.url} alt="" className={styles.image} />
				<div className={styles.details}>
					<TextParagraph styleParagraph='card'>
						{filmData.primaryImage.caption.plainText}
					</TextParagraph>
					<div className={styles.additionalDetails}>
						<CardFilmRate className={styles.rate} rate={filmData.position}/>
						<CardFilmFavorites className={styles.isFavorite} isFavorite={false} />
					</div>
					<dl className={styles.propertyList}>
						<dt className={styles.subTitle}>Тип</dt>
						<dd className={styles.value}>{filmData.titleType.text}</dd>
						<dt className={styles.subTitle}>Дата выхода</dt>
						<dd className={styles.value}>{filmData.releaseDate.year || '-'}</dd>
						{/*<dt className={styles.subTitle}>Длительность</dt>*/}
						{/*<dd className={styles.value}>{parseDuration(props.duration)}</dd>*/}
						{/*<dt className={styles.subTitle}>Жанр</dt>*/}
						{/*<dd className={styles.value}>*/}
						{/*	{Array.isArray(props.genre) ? props.genre.join(', ') : props.genre}*/}
						{/*</dd>*/}
					</dl>
				</div>
			</div>
			{/*{props.review && <section className={styles.cardItemReview}>*/}
			{/*	<span className={styles.subTitle}>Отзыв</span>*/}
			{/*	<div className={styles.review}>*/}
			{/*		<div className={styles.reviewTitle}>*/}
			{/*			<div className={styles.reviewHeader}>1</div>*/}
			{/*			<div className={styles.reviewDate}>2</div>*/}
			{/*		</div>*/}
			{/*		<TextParagraph styleParagraph='card'>*/}
			{/*			{props.review.reviewBody}*/}
			{/*		</TextParagraph>*/}
			{/*	</div>*/}
			{/*</section>}*/}
		</article>
	);
}
