export const USER_STATE = {
	userData: {
		name: '',
		isLogin: false
	},
	validate: false
};

export function actionsLoginForm(state, action) {

	switch (action.type) {
	case 'UPDATE_NAME':
		return {...state, userData: {...state.userData, name: action.data}};
	case 'LOGIN': {
		return {...state, userData: {...state.userData, isLogin: true}};
	}
	case 'LOGOUT': {
		return {...state, userData: USER_STATE.userData};
	}
	case 'WRITE_TO_LOCALSTORAGE': {
		const updatedState = { ...state, userData: { ...state.userData, isLogin: true } };
		const setUserData = JSON.stringify(updatedState.userData);
		localStorage.setItem('userData', setUserData);
		return state;
	}
	default:
		return state;
	}
}



