import styles from './CardFilmRate.module.css';
import cn from 'classnames';

interface CardFilmRateProps {
	rate?: number | null;
	className?: string;
}


export default function CardFilmRate({rate, className}: CardFilmRateProps) {

	return (
		<div className={cn(styles.cardRate, className)}>
			<img src="/star.svg" alt=""/>
			{rate ? <span>{rate}</span> : <span>0</span>}
		</div>
	);
}