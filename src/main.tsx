import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import AuthUserContext from './context/AuthUser.context.tsx';
import Main from  './pages/Main/Main.tsx';
import Error from './pages/Error/Error.tsx';
import Login from './pages/Login/Login.tsx';
import Body from './Layout/Body/Body.tsx';
import Favorites from './pages/Favorites/Favorites.tsx';
import Movie from './pages/Movie/Movie.tsx';
import Profile from './pages/Profile/Profile.tsx';
import {DEFAULT_URL} from './heplers/API.ts';
import {CardsFieldProps, FilmDataFull} from './components/CardsField/CardsField.props.ts';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Body />,
		children: [
			{
				path: '/',
				element: <Main />
			},
			{
				path: '/login',
				element: <Login />
			},
			{
				path: '/favorites',
				element: <Favorites />
			},
			{
				path: '/profile',
				element: <Profile />
			},
			{
				path: '/movie/:id',
				element: <Movie />,
				errorElement: <Error />,
				loader: async ({params}) => {
					try {
						//const response = await fetch(`${DEFAULT_URL}/?tt=${params.}`);
						const response = await fetch(`${DEFAULT_URL}/?tt=tt1111422`);
						if (!response.ok) {
							console.log('1', data);
							return;
						}
						const data = await response.json() as FilmDataFull;
						console.log('2', data);
						return data;
					} catch (e) {
						console.error(e);
						return;
					}
				}
			},
			{
				path: '*',
				element: <Error />
			}
		]
	}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<AuthUserContext>
		<React.StrictMode>
			<RouterProvider router={router}/>
		</React.StrictMode>
	</AuthUserContext>
);