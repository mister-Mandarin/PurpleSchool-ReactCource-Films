import {Await, defer, useLoaderData} from 'react-router-dom';
import {Suspense} from 'react';
import {CardsFieldProps} from '../../components/CardsField/CardsField.props.ts';
import Error from '../Error/Error.tsx';
import CardItem from '../../components/CardItem/CardItem.tsx';
import {DEFAULT_URL, options} from '../../heplers/API.ts';


// https://reactrouter.com/en/main/guides/deferred

export function loader({ params }){
	return defer({
		data: new Promise((resolve, reject) => {
			setTimeout(async () => {
				try {
					const response = await fetch(`${DEFAULT_URL}/titles/${params.id}`, options);
					if (!response.ok) {
						return;
					}
					const data = await response.json();
					resolve({data} );
				} catch (error) {
					console.error('Ошибка!!! ', error);
					reject(error);
				}
			}, 3000);
		})
	}
	);
}

export default function Movie() {

	const dataResponse = useLoaderData();
	const {data} = dataResponse as {data: CardsFieldProps};

	console.log('data useLoaderData ', data);

	return (
		<Suspense fallback={<Error title='Загружаю данные фильма...'/>}>
			<Await resolve={data}>
				{({data}) => (
					<CardItem {...data} />
				)}
			</Await>
		</Suspense>
	);
}