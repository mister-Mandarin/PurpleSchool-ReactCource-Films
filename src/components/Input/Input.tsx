import styles from './Input.module.css';
import {forwardRef} from 'react';
import cn from 'classnames';
import {InputProps} from './Input.props.ts';

const Input = forwardRef<HTMLInputElement, InputProps>(
	function Input({className, placeholder, icon = false, ...props}, ref) {

		return (
			<div className={styles.inputWrapper}>
				{icon && <img className={styles.icon} src="/search.svg" alt=""/>}
				<input
					{...props}
					className={cn(className, styles.input, {
						[styles.inputIcon]: icon
					})}
					type='text'
					placeholder={placeholder}
					ref={ref}
				/>
			</div>
		);
	});

export default Input;