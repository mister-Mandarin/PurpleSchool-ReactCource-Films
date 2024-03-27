import styles from '../Layout.module.css';
import Header from '../Header/Header.tsx';
import {Outlet} from 'react-router-dom';

export default function BodyLayout() {
	return (
		<>
			<Header />
			<div className={styles.bodyContainer}>
				<Outlet />
			</div>
		</>
	);
}