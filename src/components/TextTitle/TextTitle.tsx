import styles from './TextTitle.module.css';
import cn from 'classnames';
import {TextTitleProps} from "./TextTitle.props.ts";

export default function TextTitle({className, tag, children, ...props}: TextTitleProps) {
	return (
		<tag className={cn(className, styles.headerTitle, {
			[styles.big]: tag === 'h1',
			[styles.small]: tag === 'h3' || tag === 'h2'
		})}
		{...props}
		>
			{children}
		</tag>
	);
}