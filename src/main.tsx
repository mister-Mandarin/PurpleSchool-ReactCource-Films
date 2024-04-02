import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Main from './pages/Main/Main.tsx';
import Error from './pages/Error/Error.tsx';
import Login from './pages/Login/Login.tsx';
import Favorites from './pages/Favorites/Favorites.tsx';
import Profile from './pages/Profile/Profile.tsx';
import CheckAuth from './heplers/CheсkAuth.tsx';
import AuthLayout from './Layout/Auth/AuthLayout.tsx';
import BodyLayout from './Layout/Body/BodyLayout.tsx';
import Movie, {loader} from './pages/Movie/Movie.tsx';
import {Provider} from 'react-redux';
import store from './store/store.ts';


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
	<Provider store={store}>
		<React.StrictMode>
			<RouterProvider router={router}/>
		</React.StrictMode>
	</Provider>
);