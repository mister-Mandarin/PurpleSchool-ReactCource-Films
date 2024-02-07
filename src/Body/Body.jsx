import styles from './Body.module.css';
import Input from '../Input/Input.jsx';
import Button from '../Button/Button.jsx';
import TextTitle from '../TextTitle/TextTitle.jsx';
import TextParagraph from '../TextParagraph/TextParagraph.jsx';
import CardsField from '../CardsField/CardsField.jsx';
import Data from '../CardsField/data/data.json';

export default function Body() {
	return (
		<div className={styles.bodyContainer}>
			<Input placeholder='Введите название' icon={true}/>

			<Button name={'Искать'} onClick={() => console.log('Меня нажали!')}/>
			<TextTitle Tag={'h1'} className={'big'} text={'Вход'} />
			<TextParagraph className={'title'} text={'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'} />

			<TextTitle Tag={'h3'} className={'small'} text={'Avengers: Endgame'} />
			<TextParagraph className={'card'} text={'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts...'} />
			<CardsField Data={Data}/>
		</div>
	);
}