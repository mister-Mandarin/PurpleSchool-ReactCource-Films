import {HTMLAttributes, ReactNode} from 'react';

export interface TextTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    Tag: 'h1' | 'h2'| 'h3';
    children: ReactNode;
} 