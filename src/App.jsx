import './App.css';
import Button from './Button/Button.jsx';
import HeadTitle from './HeadTitle/HeadTitle.jsx';
import HeaderDescription from './HeaderDescription/HeaderDescription.jsx';
import Input from './Input/Input.jsx';
import Layout from './Layout/Layout.jsx';
import CardsField from './CardsField/CardsField.jsx';
import CardFilm from './CardFilm/CardFilm.jsx';

export default function App() {

	return (
		<>
			<Layout />
			<Input placeholder='Введите название' icon={true}/>

			<Button name={'Искать'} onClick={() => console.log('Меня нажали!')}/>
			<HeadTitle Tag={'h1'} className={'big'} text={'Вход'} />
			<HeaderDescription className={'description-title'} text={'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'} />

			<HeadTitle Tag={'h3'} className={'small'} text={'Avengers: Endgame'} />
			<HeaderDescription className={'description-card'} text={'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts...'} />
			<CardsField>
				<CardFilm
					name='asdf'
					isFavorite={false}
					rate='1233'
					img='../src/CardsField/data/img/Black-Widow.jpg'
				/>
			</CardsField>
		</>
	);
}
 