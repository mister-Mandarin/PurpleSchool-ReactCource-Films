import {NavLinkProps} from 'react-router-dom';
import {ReactNode} from 'react';

export interface HeaderLinkProps extends NavLinkProps {
    children: ReactNode;
    icon?: 'login' | 'user' | number;
}