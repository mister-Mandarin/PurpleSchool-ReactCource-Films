import './App.css';
import Header from './Header/Header.jsx';
import Body from './Body/Body.jsx';
import AuthUserContext from './context/AuthUser.context.jsx';

export default function App() {

	return (
		<AuthUserContext>
			<Header />
			<Body />
		</AuthUserContext>
	);
}