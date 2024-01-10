import './App.css';
import Button from './Button/Button.jsx';
import HeadTitle from './HeadTitle/HeadTitle.jsx';
import HeaderDescription from './HeaderDescription/HeaderDescription.jsx';

export default function App() {

	return (
		<>
			<Button name={'Искать'} />
			<HeadTitle Tag={'h1'} className={'big'} text={'Вход'} />
			<HeaderDescription className={'description-title'} text={'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'} />

			<HeadTitle Tag={'h3'} className={'small'} text={'Avengers: Endgame'} />
			<HeaderDescription className={'description-card'} text={'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts...'} />
		</>
	);
}
 