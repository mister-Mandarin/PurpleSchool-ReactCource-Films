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
				path: '/movie/:id',
				element: <Movie />
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