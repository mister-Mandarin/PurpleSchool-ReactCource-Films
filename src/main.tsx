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
import {FilmDataAll} from './components/CardsField/CardsField.props.ts';


// async function fetchFilmId({ params }) {
// 	try {
// 		//const response = await fetch(`${DEFAULT_URL}/?tt=${params.}`);
// 		const response = await fetch(`${DEFAULT_URL}/?tt=${params.id}`);
// 		if (!response.ok) {
// 			return;
// 		}
// 		const data = await response.json() as FilmDataAll;
// 		console.log('2', data);
// 		return data;
// 	} catch (e) {
// 		console.error(e);
// 		return;
// 	}
// }


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
				element: <Movie/>,
				errorElement: <Error/>,
				// https://reactrouter.com/en/6.19.0/route/loader
				loader: async function fetchFilmId({ params }) {
					try {
						//const response = await fetch(`${DEFAULT_URL}/?tt=${params.}`);
						const response = await fetch(`${DEFAULT_URL}/?tt=${params.id}`);
						if (!response.ok) {
							return;
						}
						const data = await response.json() as FilmDataAll;
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