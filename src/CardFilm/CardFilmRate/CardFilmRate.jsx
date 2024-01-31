import './CardFilmRate.css';

export default function CardFilmRate({rate}) {
	return (
		<div className='card-rate'>
			<img src="/star.svg" alt=""/>
			<span>{rate}</span>
		</div>
	);
}