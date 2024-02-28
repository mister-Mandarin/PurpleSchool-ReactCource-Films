import styles from './TextTitle.module.css';
import cn from 'classnames';

export default function TextTitle({className, Tag, text, ...props}) {
	return (
		<Tag className={cn(className, styles.headerTitle, {
			[styles.big]: Tag === 'h1',
			[styles.small]: Tag === 'h3' || Tag === 'h2'
		})}
		{...props}
		>
			{text}
		</Tag>
	);
}