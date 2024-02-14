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
	case 'CHANGE_LOCALSTORAGE': {
		const updatedState = { ...state, userData: { ...state.userData } };
		const setUserData = JSON.stringify(updatedState.userData);
		console.log('updatedState ', updatedState.userData);
		localStorage.setItem('userData', setUserData);
		return state;
	}
	default:
		return state;
	}
}



