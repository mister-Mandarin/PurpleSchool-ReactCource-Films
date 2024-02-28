import styles from './Body.module.css';
import TextTitle from '../TextTitle/TextTitle.jsx';
import TextParagraph from '../TextParagraph/TextParagraph.jsx';
import CardsField from '../CardsField/CardsField.jsx';
import data from '../CardsField/data/data.json';
import FormLogin from '../FormLogin/FormLogin.jsx';

export default function Body() {
	return (
		<div className={styles.bodyContainer}>
			<FormLogin />
			<hr />
			<TextTitle Tag={'h3'} text={'Avengers: Endgame'} />
			<TextParagraph className={'card'} text={'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts...'} />
			<CardsField data={data}/>
		</div>
	);
}