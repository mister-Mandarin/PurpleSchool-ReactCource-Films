import TextTitle from '../TextTitle/TextTitle.tsx';
import {FilmDataShort} from '../CardsField/CardsField.props.ts';
import CardFilmRate from '../CardFilm/CardFilmRate/CardFilmRate.tsx';
import CardFilmFavorites from '../CardFilm/CardFilmFavorites/CardFilmFavorites.tsx';
import styles from './CardItem.module.css';
import TextParagraph from '../TextParagraph/TextParagraph.tsx';

interface CardItemProps {
	props: FilmDataShort;
}

export default function CardItem(props: FilmDataShort) {

	function parseDuration(duration: string) {
		return duration
			.replace('PT', '')
			.replace('H', ' ч ')
			.replace('M', ' мин')
			.replace('H0', '')
			.replace('M0', '');
	}

	return (
		<article>
			<header className={styles.cardItemHeader}>
				<span className={styles.subTitle}>Название фильма</span>
				<TextTitle className={styles.title} Tag='h2'>{props.name}</TextTitle>
			</header>
			<div className={styles.cardItemContent}>
				<img src={props.image} alt="" className={styles.image} />
				<div className={styles.details}>
					<TextParagraph styleParagraph='card'>
						{props.description}
					</TextParagraph>
					<div className={styles.additionalDetails}>
						<CardFilmRate className={styles.rate} rate={props.aggregateRating.ratingValue} />
						<CardFilmFavorites className={styles.isFavorite} isFavorite={props.isFavorite} />
					</div>
					<dl className={styles.propertyList}>
						<dt className={styles.subTitle}>Тип</dt>
						<dd className={styles.value}>{props['@type']}</dd>
						<dt className={styles.subTitle}>Дата выхода</dt>
						<dd className={styles.value}>{props.datePublished}</dd>
						<dt className={styles.subTitle}>Длительность</dt>
						<dd className={styles.value}>{parseDuration(props.duration)}</dd>
						<dt className={styles.subTitle}>Жанр</dt>
						<dd className={styles.value}>
							{Array.isArray(props.genre) ? props.genre.join(', ') : props.genre}
						</dd>
					</dl>
				</div>
			</div>
			<section className={styles.cardItemReview}>
				<span className={styles.subTitle}>Отзыв</span>
				<div className={styles.review}>
					<div className={styles.reviewTitle}>
						<div className={styles.reviewHeader}>1</div>
						<div className={styles.reviewDate}>2</div>
					</div>
					<TextParagraph styleParagraph='card'>
						{props.review.reviewBody}
					</TextParagraph>
				</div>
			</section>
		</article>
	);
}
