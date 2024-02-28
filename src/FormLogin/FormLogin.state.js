export const USER_STATE_DEFAULT = {
	name:'',
	isLogin: false
};

export function actionsLoginForm(state, action) {

	switch (action.type) {
	case 'UPDATE_NAME':
		return {...state, name: action.data};
	case 'LOGIN': {
		let newState = {...state, isLogin: true};
		localStorage.setItem(action.key, JSON.stringify(newState));
		return newState;
	}
	case 'LOGOUT': {
		let newState = {...state, ...USER_STATE_DEFAULT};
		localStorage.setItem(action.key, JSON.stringify(newState));
		return newState;
	}
	default:
		return state;
	}
}