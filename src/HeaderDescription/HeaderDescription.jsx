import './HeaderDescription.css';

export default function HeaderDescription({text, className}) {
	return (
		<>
			<p className={`description ${className}`}>{text}</p>
		</>
	);
}