import {Await, useLoaderData} from 'react-router-dom';
import {Suspense} from 'react';
import CardItem from '../../components/CardItem/CardItem.tsx';
import {FilmDataAll, FilmDataShort} from '../../components/CardsField/CardsField.props.ts';

export default function Product() {

	const data = useLoaderData() as FilmDataShort;
	const short = data.short as FilmDataAll;
	console.log('short ',data);
	return <>
		<Suspense fallback={'Загружаю...'}>
			<Await resolve={short}>

				{({short}) => (
					<CardItem {...short} />
				)}
			</Await>
		</Suspense>
	</>;
}