import './TextParagraph.css';

export default function TextParagraph({text, className}) {
	return (
		<>
			<p className={`description ${className}`}>{text}</p>
		</>
	);
}