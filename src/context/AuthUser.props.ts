import {ReactNode} from 'react';
import {StateProps} from '../pages/Login/Login.props.ts';
import {FilmData} from '../components/CardsField/CardsField.props.ts';

export interface AuthUserProps {
    children: ReactNode;
}

export interface AuthUserContextType {
    setStorageValue: (data: string) => void;
    setDefaultValue: () => void;
    authState: StateProps;
    data: FilmData[];
}