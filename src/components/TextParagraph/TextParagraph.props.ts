import {HTMLAttributes, ReactNode} from 'react';

// enum TextParagraphType {
//     Title = 'title',
//     Card = 'card'
// }

export interface TextParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
    styleParagraph: 'title' | 'card';
    children: ReactNode;
}