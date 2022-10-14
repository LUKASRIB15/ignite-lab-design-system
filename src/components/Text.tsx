import { ReactNode } from 'react';
import clsx from 'clsx';
import {Slot} from '@radix-ui/react-slot';


export interface TextProps{
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: Boolean;
    className?: string;
}

export function Text({size = 'md', children, asChild, className}: TextProps){
    const Comp = asChild? Slot : 'span';
    return(
        <Comp className = {clsx(
        'font-sans',
        {
            'text-xs': size == 'sm',
            'text-sm': size == 'md',
            'text-md': size == 'lg',
        },
        className
        )}>{children}</Comp>
    )
}