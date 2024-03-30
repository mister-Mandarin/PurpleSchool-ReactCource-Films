// Апишка отсюда
// https://rapidapi.com/SAdrian/api/moviesdatabase

const apiKey = null;
const host = 'moviesdatabase.p.rapidapi.com';
export const DEFAULT_URL = `https://${host}`;

export const options = {
	headers: {
		'X-RapidAPI-Key': apiKey,
		'X-RapidAPI-Host': host
	}
};