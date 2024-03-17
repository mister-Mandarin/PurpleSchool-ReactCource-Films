import {Dispatch, ReactNode, SetStateAction} from 'react';
import {ActionProps, StateProps} from '../pages/Login/Login.props.ts';
import {FilmData} from '../components/CardsField/CardsField.props.ts';

export interface AuthUserProps {
    children: ReactNode;
}

export interface AuthUserContextType {
    state: StateProps; 
    dispatch: Dispatch<ActionProps>;
    authState: StateProps;
    setAuthState: Dispatch<SetStateAction<StateProps>>;
    data: FilmData[];
}