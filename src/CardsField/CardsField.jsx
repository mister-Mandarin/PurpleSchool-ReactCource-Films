import './CardsField.css';
import './data/data.json';

export default function CardsField({children}) {
	return (
		<div className='cards-field'>
			{children}
		</div>
	);
}