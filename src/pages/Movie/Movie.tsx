import {useParams} from 'react-router-dom';
import {useContext} from 'react';
import CardItem from '../../components/CardItem/CardItem.tsx';
import {AuthContext} from '../../context/AuthUser.context.tsx';
import {FilmDataFull} from '../../components/CardsField/CardsField.props.ts';

export default function Product() {

	const {id} = useParams();
	const {data} = useContext(AuthContext);

	const selectedItem = data.find(el => el.id === Number(id)) as FilmDataFull | undefined;

	if (selectedItem) {
		return <CardItem {...selectedItem} />;
	}
}