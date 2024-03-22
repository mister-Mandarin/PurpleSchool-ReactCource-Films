import styles from './TextParagraph.module.css';
import cn from 'classnames';
import {TextParagraphProps} from './TextParagraph.props.ts';

export default function TextParagraph({children, styleParagraph}: TextParagraphProps) {
	return (
		<>
			<p className={cn(styles.description, {
				[styles.descriptionTitle]: styleParagraph === 'title',
				[styles.descriptionCard]: styleParagraph === 'card'
			})}>{children}</p>
		</>
	);
}