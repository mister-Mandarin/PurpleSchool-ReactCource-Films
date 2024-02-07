import styles from './Input.module.css';
import {useState} from 'react';
import cn from 'classnames';

export default function Input({placeholder, icon= false}) {

	const [value, setValue] = useState('');

	const handleChange = (event) => {
		setValue(event.target.value);
		console.log(value);
	};

	return (
		<div className={styles.inputWrapper}>
			{icon ? <img className={styles.icon} src="/search.svg" alt=""/> : ''}
			<input
				className={cn(styles.input, {
					[styles.inputIcon]: icon
				})}
				value={value}
				onChange={handleChange}
				type='text'
				placeholder={placeholder}
			/>
		</div>
	);
}