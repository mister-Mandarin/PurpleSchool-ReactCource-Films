import CardsField from '../../components/CardsField/CardsField.tsx';
import Search from '../../components/Search/Search.tsx';
import {ChangeEvent, FormEvent, useState} from 'react';
import {DEFAULT_URL} from '../../heplers/API.ts';
import {CardsFieldProps} from '../../components/CardsField/CardsField.props.ts';

const INITIAL_STATE_DATA: CardsFieldProps = {
	ok: false,
	description: [],
	error_code: 0
};

export default function Body() {

	const [search, setSearch] = useState<string | null>(null);
	const [data, setData] = useState<CardsFieldProps>(INITIAL_STATE_DATA);

	function searchFilms(e: FormEvent) {
		e.preventDefault();
		if (search) {
			getFilms();
		}
	}

	async function getFilms() {
		try {
			const response = await fetch(`${DEFAULT_URL}/?q=${search}`);
			if (!response.ok) {
				return;
			}
			const data1 = await response.json() as CardsFieldProps;
			setData(data1);
		} catch (e) {
			console.error(e);
			return;
		}
	}

	const updateSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	return (
		<>
			<Search onChange={updateSearch} searchFilms={searchFilms}/>
			{data.description.length > 0 && <CardsField {...data}/>}
		</>
	);
}