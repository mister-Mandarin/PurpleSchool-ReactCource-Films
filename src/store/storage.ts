import {StateProps} from './User.slice.ts';

export default function loadState(key: string) {
	try {
		const stateLoad = localStorage.getItem(key);
		if (!stateLoad) {
			return;
		}
		return JSON.parse(stateLoad);
	} catch (err) {
		console.error(err);
		return undefined;
	}
}

export function saveState(state: StateProps, key: string) {
	const savedState = JSON.stringify(state);
	localStorage.setItem(key, savedState);
}
