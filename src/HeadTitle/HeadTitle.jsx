import './HeadTitle.css';

export default function HeadTitle({ Tag, className, text }) {
	return (
		<Tag className={`header-title ${className}`}>
			{text}
		</Tag>
	);
}