import './Input.css';
import {useState} from 'react';

export default function Input({placeholder, icon=false}) {

	const inputIcon = icon ? 'input input-icon' : 'input';

	const [value, setValue] = useState('');

	const handleChange = (event) => {
		setValue(event.target.value);
		console.log(value);
	};

	return (
		<div className='input-wrapper'>
			{icon ? <img className='icon' src="/search.svg" alt=""/> : ''}
			<input className={inputIcon} value={value} onChange={handleChange} type='text' placeholder={placeholder} />
		</div>
	);
}