import styles from './Button.module.css';
import {ButtonProps} from './Button.props.ts';

export default function Button({children, onClick}: ButtonProps) {
	return (
		<button className={styles.button} onClick={onClick}>{children}</button>
	); 
}