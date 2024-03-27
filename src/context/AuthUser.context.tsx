import {createContext} from 'react';
import {useLocalStorage} from '../hooks/useLocalStorage.ts';
import {AuthUserContextType, AuthUserProps} from './AuthUser.props.ts';

export const AuthContext = createContext<AuthUserContextType>({} as AuthUserContextType);

export default function AuthUserContext({children}: AuthUserProps) {

	const {
		authState,
		setStorageValue,
		setDefaultValue} = useLocalStorage({key: 'userData'});

	return <AuthContext.Provider value={{authState, setStorageValue, setDefaultValue}}>
		{children}
	</AuthContext.Provider>;
}