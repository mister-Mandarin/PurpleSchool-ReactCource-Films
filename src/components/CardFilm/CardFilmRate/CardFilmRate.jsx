import styles from './CardFilmRate.module.css';

export default function CardFilmRate({rate}) {
	return (
		<div className={styles.cardRate}>
			<img src="/star.svg" alt=""/>
			<span>{rate}</span>
		</div>
	);
}