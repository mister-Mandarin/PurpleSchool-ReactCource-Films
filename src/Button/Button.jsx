import './Button.css';

export default function Button({name, onClick}) {
	return (
		<>
			<button className='button' onClick={onClick}>{name}</button>
		</>
	);
}