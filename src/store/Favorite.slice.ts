import {createSlice} from '@reduxjs/toolkit';

const initialState: string[] = [];

export const favoriteSlice = createSlice({
	// название слайса
	name: 'user/favorite',
	initialState,
	reducers: {
		addFavorite: (state, action) => {

		}
	}
});

export default favoriteSlice.reducer;
export const favoriteActions = favoriteSlice.actions;
