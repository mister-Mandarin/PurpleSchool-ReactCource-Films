import styles from './Body.module.css';
import Header from '../Header/Header.tsx';
import {Outlet} from 'react-router-dom';

export default function Body() {
	return (
		<>
			<Header />
			<div className={styles.bodyContainer}>
				<Outlet />
			</div>
		</>
	);
}