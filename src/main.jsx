import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App/>,
		children: [
			{
				path: '/',
				element: <App />
			}
			// {
			// 	path: '/cart',
			// 	element: <Cart/>
			// },
			// {
			// 	// после двоеточия может быть любое название
			// 	// это значение можно достать с помощью useParams
			// 	path: '/product/:id',
			// 	element: <Product/>
			// }
		]
	}
	// {
	// 	path: '*',
	// 	element: <Error/>
	// }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router}/>
	</React.StrictMode>
);