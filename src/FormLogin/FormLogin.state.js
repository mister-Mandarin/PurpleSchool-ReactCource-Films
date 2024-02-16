export const USER_STATE_DEFAULT = {
	name: '',
	isLogin: false
};

export function actionsLoginForm(state, action) {

	switch (action.type) {
	case 'UPDATE_NAME':
		return {...state, name: action.data};
	case 'LOGIN': {
		console.log(state);
		return {...state, isLogin: true};
	}
	case 'LOGOUT':
		return {...state, USER_STATE_DEFAULT};
	default:
		return state;
	}
}