import styles from './TextTitle.module.css';
import cn from 'classnames';

export default function TextTitle({ Tag, className, text }) {
	return (
		<Tag className={cn(styles.headerTitle, {
			[styles.big]: className === 'big',
			[styles.small]: className === 'small'
		})}>
			{text}
		</Tag>
	);
}