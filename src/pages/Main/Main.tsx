import CardsField from '../../components/CardsField/CardsField.tsx';
import Search from '../../components/Search/Search.tsx';
import {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {DEFAULT_URL, options} from '../../heplers/API.ts';
import {CardsFieldProps} from '../../components/CardsField/CardsField.props.ts';
import Error from '../Error/Error.tsx';


export default function Body() {

	const [search, setSearch] = useState<string | null>('pokemon');
	const [data, setData] = useState<CardsFieldProps>({results: []});
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);

	async function searchFilms(e: FormEvent) {
		e.preventDefault();
		if (search) {
			await getFilms();
		}
	}

	useEffect(() => {
		getFilms();
	}, []);

	async function getFilms() {
		try {
			setIsLoading(true);
			setError(false);
			//const response = await fetch(`${DEFAULT_URL}/titles/search/keyword/${search}`, options);
			const response = await fetch(`${DEFAULT_URL}/titles/search/keyword/${search}`, options);
			if (!response.ok) {
				return;
			}
			const data = await response.json() as CardsFieldProps;
			console.log('data ', data);

			if (!data.results.length) {
				setError(true);
			}

			setIsLoading(false);
			setData(data);
			return;

		} catch (error) {
			setError(true);
			setIsLoading(false);
			return;
		}
	}

	const updateSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	return (
		<>
			<Search onChange={updateSearch} searchFilms={searchFilms}/>
			{error && <Error title='Произошла ошибка' subtitle='фильм не найден' />}
			{isLoading && <Error title='Загружаю список фильмов...' subtitle='Осталось совсем чуть-чуть' />}
			{!isLoading && <CardsField {...data}/>}
		</>
	);
}