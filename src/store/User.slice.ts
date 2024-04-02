import {createSlice} from '@reduxjs/toolkit';
import loadState from './storage.ts';

export interface StateProps {
	name: string | undefined;
	isLogin: boolean;
}

export const USER_STATE_DEFAULT: StateProps = {
	name:'',
	isLogin: false
};

//const initialState = loadState('userData') ?? USER_STATE_DEFAULT;
const initialState = loadState('userData') ?? USER_STATE_DEFAULT;

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: (state, action) => {
			if (!action.payload) {
				return;
			}
			state.name = action.payload;
			state.isLogin = true;
		},
		logout: (state) => {
			state.name = '';
			state.isLogin = false;
		}
	}
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
