import {Await, useLoaderData, useParams} from 'react-router-dom';
import React, {Suspense} from 'react';
import CardItem from '../../components/CardItem/CardItem.tsx';
import {FilmDataFull} from '../../components/CardsField/CardsField.props.ts';

export default function Product() {

	const data = useLoaderData() as FilmDataFull;

	return <Suspense fallback={'Загружаю...'}>
		<Await resolve={data}>
			<CardItem data={data} />;
		</Await>
	</Suspense>;
}