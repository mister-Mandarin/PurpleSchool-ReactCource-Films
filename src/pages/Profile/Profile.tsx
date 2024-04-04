import TextTitle from '../../components/TextTitle/TextTitle.tsx';
import TextParagraph from '../../components/TextParagraph/TextParagraph.tsx';
import styles from './Profile.module.css';

export default function Error() {
	return (
		<>
			<div className={styles.errorPage}>
				<TextTitle Tag='h2' className={styles.errorTitle}>
                    Тут будет информация о вашем профиле
				</TextTitle>
				<TextParagraph styleParagraph='card'>
                    Но потом =)
				</TextParagraph>
			</div>
		</>
	);
}