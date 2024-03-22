import TextTitle from '../TextTitle/TextTitle.tsx';
import { FilmDataFull } from '../CardsField/CardsField.props.ts';
import CardFilmRate from '../CardFilm/CardFilmRate/CardFilmRate.tsx';
import CardFilmFavorites from '../CardFilm/CardFilmFavorites/CardFilmFavorites.tsx';
import styles from './CardItem.module.css';
import TextParagraph from '../TextParagraph/TextParagraph.tsx';

export default function CardItem(props: FilmDataFull) {

	return (
		<article>
			<header className={styles.cardItemHeader}>
				<span className={styles.subTitle}>Название фильма</span>
				<TextTitle className={styles.title} Tag='h2'>{props.title}</TextTitle>
			</header>
			<div className={styles.cardItemContent}>
				<img src={props.img} alt="" className={styles.image} />
				<div className={styles.details}>
					<TextParagraph styleParagraph='card'>
						{props.description}
					</TextParagraph>
					<div className={styles.additionalDetails}>
						<CardFilmRate className={styles.rate} rate={Number(props.rate)} />
						<CardFilmFavorites className={styles.isFavorite} isFavorite={Boolean(props.isFavorite)} />
					</div>
					<dl className={styles.propertyList}>
						<dt className={styles.subTitle}>Тип</dt>
						<dd className={styles.value}>{props.type}</dd>
						<dt className={styles.subTitle}>Дата выхода</dt>
						<dd className={styles.value}>{props.releaseDate}</dd>
						<dt className={styles.subTitle}>Длительность</dt>
						<dd className={styles.value}>{props.duration}</dd>
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
						<div className={styles.reviewHeader}>Not as good as infinity war..</div>
						<div className={styles.reviewDate}>2019-04-29</div>
					</div>
					<TextParagraph styleParagraph='card'>
						But its a pretty good film. A bit of a mess in some parts, lacking the cohesive and effortless
						feel infinity war somehow managed to accomplish. Some silly plot holes and characters that
						couldve been cut (Ahem, captain marvel and thanos). The use of Captain marvel in this film was
						just ridiculous. Shes there at the start, bails for some reason? And then pops up at the end to
						serve no purpose but deux ex machina a space ship...
					</TextParagraph>
				</div>
			</section>
		</article>
	);
}
