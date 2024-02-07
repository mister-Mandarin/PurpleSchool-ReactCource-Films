import styles from './Button.module.css';

export default function Button({name, onClick}) {
	return (
		<button className={styles.button} onClick={onClick}>{name}</button>
	); 
}