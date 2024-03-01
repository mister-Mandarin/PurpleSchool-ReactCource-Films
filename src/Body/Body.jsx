import styles from './Body.module.css';
import TextTitle from '../components/TextTitle/TextTitle.tsx';
import TextParagraph from '../components/TextParagraph/TextParagraph.jsx';
import CardsField from '../components/CardsField/CardsField.jsx';
import data from '../components/CardsField/data/data.json';
import FormLogin from '../FormLogin/FormLogin.jsx';

export default function Body() {
	return (
		<div className={styles.bodyContainer}>
			<FormLogin />
			<hr />
			<TextTitle tag='h1'>Avengers: Endgame</TextTitle>
			<TextParagraph className={'card'} text={'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts...'} />
			<CardsField data={data}/>
		</div>
	);
}