import styles from './Input.module.css';
import {forwardRef} from 'react';
import cn from 'classnames';
import {InputProps} from './Input.props.ts';

const Input = forwardRef<HTMLInputElement, InputProps>(
	function Input({className, icon = false, ...props}, ref) {

		return (
			<div className={styles.inputWrapper}>
				{icon && <img className={styles.icon} src="/search.svg" alt=""/>}
				<input
					{...props}
					ref={ref}
					className={cn(className, styles.input, {
						[styles.inputIcon]: icon
					})}
				/>
			</div>
		);
	});

export default Input;