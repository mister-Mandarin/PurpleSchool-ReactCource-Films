import {Dispatch, ReactNode, SetStateAction} from 'react';
import {ActionProps, StateProps} from '../FormLogin/FormLogin.props.ts';

export interface AuthUserProps {
    children: ReactNode;
}

export interface AuthUserContextType {
    state: StateProps; 
    dispatch: Dispatch<ActionProps>;
    authState: StateProps;
    setAuthState: Dispatch<SetStateAction<StateProps>>;
}