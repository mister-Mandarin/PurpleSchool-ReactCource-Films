// Апишка отсюда
// https://rapidapi.com/SAdrian/api/moviesdatabase

export const DEFAULT_URL = `https://${import.meta.env.VITE_BASE_URL}`;

export const options = {
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
		'X-RapidAPI-Host': import.meta.env.VITE_BASE_URL
	}
};