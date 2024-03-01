import styles from './TextParagraph.module.css';
import cn from 'classnames';

export default function TextParagraph({children, className = 'title' || 'card'}) {
	return (
		<>
			<p className={cn(styles.description, {
				[styles.descriptionTitle]: className === 'title',
				[styles.descriptionCard]: className === 'card'
			})}>{children}</p>
		</>
	);
}