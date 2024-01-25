import './App.css';
import Button from './Button/Button.jsx';
import TextTitle from './TextTitle/TextTitle.jsx';
import TextParagraph from './TextParagraph/TextParagraph.jsx';
import Input from './Input/Input.jsx';
import Header from './Header/Header.jsx';
import CardsField from './CardsField/CardsField.jsx';
import Body from './Body/Body.jsx';

export default function App() {

	return (
		<>
			<Header />
			<Body>
				<Input placeholder='Введите название' icon={true}/>

				<Button name={'Искать'} onClick={() => console.log('Меня нажали!')}/>
				<TextTitle Tag={'h1'} className={'big'} text={'Вход'} />
				<TextParagraph className={'description-title'} text={'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'} />

				<TextTitle Tag={'h3'} className={'small'} text={'Avengers: Endgame'} />
				<TextParagraph className={'description-card'} text={'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts...'} />
				<CardsField />
			</Body>
		</>
	);
}