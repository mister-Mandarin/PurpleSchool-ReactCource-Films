import styles from './CardFilmRate.module.css';

interface CardFilmRateProps {
	rate: number;
}

export default function CardFilmRate({rate}: CardFilmRateProps) {
	return (
		<div className={styles.cardRate}>
			<img src="/star.svg" alt=""/>
			<span>{rate}</span>
		</div>
	);
}