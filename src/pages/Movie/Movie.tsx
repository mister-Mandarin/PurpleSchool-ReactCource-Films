import {Await, useLoaderData} from 'react-router-dom';
import {lazy, Suspense} from 'react';
import {FilmDataAll, FilmDataShort} from '../../components/CardsField/CardsField.props.ts';
import Error from '../Error/Error.tsx';

export default function Movie() {

	const data = useLoaderData() as FilmDataShort;
	const short = data as FilmDataAll;
	const CardItem = lazy(() => import('../../components/CardItem/CardItem.tsx'));

	return (
		// почему то не отрабатывает...
		<Suspense fallback={<Error title='Загружаю данные фильма...'/>}>
			<Await resolve={short}>
				{({short}) => (
					<CardItem {...short} />
				)}
			</Await>
		</Suspense>
	);
}