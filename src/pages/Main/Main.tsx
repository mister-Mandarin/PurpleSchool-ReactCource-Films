import CardsField from '../../components/CardsField/CardsField.tsx';
import Search from '../../components/Search/Search.tsx';
import {useContext} from 'react';
import {AuthContext} from '../../context/AuthUser.context.tsx';

export default function Body() {

	const {data} = useContext(AuthContext);

	return (
		<>
			<Search />
			<CardsField data={data}/>
		</>
	);
}