import styles from './TextTitle.module.css';
import {TextTitleProps} from './TextTitle.props.ts';
import cn from 'classnames';

export default function TextTitle({className, Tag, children, ...props}: TextTitleProps) {
	return (
		<Tag className={cn(className, styles.headerTitle, {
			[styles.big]: Tag === 'h1',
			[styles.small]: Tag === 'h3' || Tag === 'h2'
		})}
		{...props}
		>
			{children}
		</Tag>
	);
}