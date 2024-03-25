import CardsField from '../../components/CardsField/CardsField.tsx';
import Search from '../../components/Search/Search.tsx';
import {ChangeEvent, FormEvent, useState} from 'react';
import {DEFAULT_URL} from '../../heplers/API.ts';
import {CardsFieldProps} from '../../components/CardsField/CardsField.props.ts';
import Error from '../Error/Error.tsx';

const INITIAL_STATE_DATA: CardsFieldProps = {
	ok: false,
	description: [],
	error_code: 0
};

export default function Body() {

	const [search, setSearch] = useState<string | null>(null);
	const [data, setData] = useState<CardsFieldProps>(INITIAL_STATE_DATA);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();

	function searchFilms(e: FormEvent) {
		e.preventDefault();
		if (search) {
			getFilms();
		}
	}

	async function getFilms() {
		try {
			setIsLoading(true);
			const response = await fetch(`${DEFAULT_URL}/?q=${search}`);
			if (!response.ok) {
				return;
			}
			const data = await response.json() as CardsFieldProps;
			console.log('data ', data);

			if (!data.description.length) {
				setError('Фильм не найден');
			}
			setError(undefined);
			setData(data);
			setIsLoading(false);

		} catch (error) {
			if (error instanceof Error) {
				setError(error);
			}
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
			{error && <Error title='Произошла ошибка' subtitle={error}/>}
			{isLoading && <Error title='Загружаю список фильмов...' subtitle='Осталось совсем чуть-чуть' />}
			{!isLoading && <CardsField {...data}/>} 

		</>
	);
}