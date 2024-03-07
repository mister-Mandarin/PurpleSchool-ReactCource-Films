import './App.css';
import Header from './components/Header/Header.tsx';
import Body from './Body/Body.tsx';
import AuthUserContext from './context/AuthUser.context.tsx';

export default function App() {

	return (
		<AuthUserContext>
			<Header />
			<Body />
		</AuthUserContext>
	);
}