import {createSlice} from '@reduxjs/toolkit';
import loadState from './storage.ts';
import {FilmData} from '../components/CardsField/CardsField.props.ts';

const initialState = loadState('favorite') ?? [];

export const favoriteSlice = createSlice({
	name: 'user/favorite',
	initialState, 
	reducers: {
		addFavorite: (state, action) => {
			const existing = state.find((item: FilmData) => item.id === action.payload.id);
			if (!existing) {
				state.push(action.payload);
			}
		},
		removeFavorite: (state, action) => {
			const index = state.findIndex((item: FilmData) => item.id === action.payload.id);
			if (index !== -1) {
				state.splice(index, 1);
			}
		}
	}
});

export default favoriteSlice.reducer;
export const favoriteActions = favoriteSlice.actions;
