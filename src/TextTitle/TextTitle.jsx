import './TextTitle.css';

export default function TextTitle({ Tag, className, text }) {
	return (
		<Tag className={`header-title ${className}`}>
			{text}
		</Tag>
	);
}