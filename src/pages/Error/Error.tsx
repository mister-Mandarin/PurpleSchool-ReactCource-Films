import TextTitle from '../../components/TextTitle/TextTitle.tsx';
import TextParagraph from '../../components/TextParagraph/TextParagraph.tsx';
import styles from './Error.module.css';

type ErrorProps = {
	title: string;
	subtitle?: string;
}

export default function Error({title, subtitle}: ErrorProps) {
	return (
		<>
			{/*<Search />*/}
			<div className={styles.errorPage}>
				<TextTitle Tag='h2' className={styles.errorTitle}>
					{title}
				</TextTitle>
				<TextParagraph styleParagraph='card'>
					{subtitle}
				</TextParagraph>
			</div>
		</>
	);
}