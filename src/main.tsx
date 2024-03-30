import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import AuthUserContext from './context/AuthUser.context.tsx';
import Main from './pages/Main/Main.tsx';
import Error from './pages/Error/Error.tsx';
import Login from './pages/Login/Login.tsx';
import Favorites from './pages/Favorites/Favorites.tsx';
import Profile from './pages/Profile/Profile.tsx';
import {DEFAULT_URL, options} from './heplers/API.ts';
import {CardsFieldProps} from './components/CardsField/CardsField.props.ts';
import CheckAuth from './heplers/CheсkAuth.tsx';
import AuthLayout from './Layout/Auth/AuthLayout.tsx';
import BodyLayout from './Layout/Body/BodyLayout.tsx';
import Movie from './pages/Movie/Movie.tsx';


async function loader({params}) {
	try {
		const response = await fetch(`${DEFAULT_URL}/titles/${params.id}`, options);
		if (!response.ok) {
			return;
		}
		return await response.json() as CardsFieldProps;
	} catch (e) {
		console.error('Ошибка!!! ', e);
		return;
	}
}

const router = createBrowserRouter([
	{
		path: '/',
		element: <CheckAuth><BodyLayout /></CheckAuth>,
		children: [
			{
				path: '/',
				element: <Main/>,
				errorElement: <Error title='Сервер недоступен. Ошибка 404'/>
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
				errorElement: <Error title='Не могу найти данные фильма. Попробуйте позже'/>,
				// https://reactrouter.com/en/6.19.0/route/loader
				loader: loader
			}
		]
	},
	{
		path: '/login',
		element: <AuthLayout />,
		children: [
			{
				path: '/login',
				element: <Login />
			}
		]
	},
	{
		path: '*',
		element: <Error title='Упс... Ничего не найдено' subtitle='Попробуйте изменить запрос или ввести более точное название фильма' />
	}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<AuthUserContext>
		<React.StrictMode>
			<RouterProvider router={router}/>
		</React.StrictMode>
	</AuthUserContext>
);