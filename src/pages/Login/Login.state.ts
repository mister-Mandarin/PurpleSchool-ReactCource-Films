import {ActionProps, StateProps} from './Login.props.ts';

export const USER_STATE_DEFAULT: StateProps = {
	name:'',
	isLogin: false 
};

export function actionsLoginForm(state: StateProps, action: ActionProps) {

	switch (action.type) {
	case 'UPDATE_NAME':
		return {...state, name: action.data};
	case 'LOGIN': {
		const newState = {...state, isLogin: true};
		// постфикс оператор ! для ненулевых значений чтобы убрать ошибку
		// 'string | undefined' is not assignable
		localStorage.setItem(action.key!, JSON.stringify(newState));
		return newState;
	}
	case 'LOGOUT': {
		const newState = {...state, ...USER_STATE_DEFAULT};
		localStorage.setItem(action.key!, JSON.stringify(newState));
		return newState;
	}
	default:
		return state;
	}
}