import { ReactNode } from 'react';
import { InputHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';


export interface TextInputRootProps{
    children: ReactNode;
}

function TextInputRoot(props:TextInputRootProps){
    return(
        <div className='flex items-center gap-3 py-4 px-3 h-12 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-500'>
            {props.children}        
        </div>
    )
}


TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIcon{
    children: ReactNode;
}

function TextInputIcon(props: TextInputIcon){
    return(
        <Slot className='w-6 h-6 text-gray-100'>
            {props.children}
        </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{}

function TextInputInput(props: TextInputInputProps){
    
    return(
        <input 
        {...props}
        className = "bg-transparent flex-1 outline-none text-gray-50 text-xs  placeholder: text-gray-100"/>
    )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}