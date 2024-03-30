import {Await, useLoaderData} from 'react-router-dom';
import {Suspense} from 'react';
import {CardsFieldProps} from '../../components/CardsField/CardsField.props.ts';
import Error from '../Error/Error.tsx';
import CardItem from '../../components/CardItem/CardItem.tsx';

export default function Movie() {

	const data = useLoaderData() as CardsFieldProps;

	console.log('data useLoaderData ', data);

	return (
		// почему то не отрабатывает fallback...
		<Suspense fallback={<Error title='Загружаю данные фильма...'/>}>
			<Await resolve={data}>
				{(data) => (
					<CardItem {...data} />
				)}
			</Await>
		</Suspense>
	);
}