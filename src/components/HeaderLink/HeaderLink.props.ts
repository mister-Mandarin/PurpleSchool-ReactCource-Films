import {HTMLAttributes, ReactNode} from 'react';

export interface HeaderLinkProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    icon?: 'login' | 'user' | number;
}