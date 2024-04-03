import {configureStore} from '@reduxjs/toolkit';
import userSlice from './User.slice.ts';
import favoriteSlice from './Favorite.slice.ts';
import {saveState} from './storage.ts';

const store = configureStore({
	reducer: {
		user: userSlice,
		favorite: favoriteSlice
	}
});

// в случае изменения состояния переписываем состояние
store.subscribe(() => {
	saveState(store.getState().user, 'userData');
	saveState(store.getState().favorite, 'favorite');
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;