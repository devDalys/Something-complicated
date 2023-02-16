import React, {ButtonHTMLAttributes} from 'react';
import {cn} from "shared/lib/classNames/classNames";
import cls from './Button.module.scss'

export enum ThemeButton {
    CLEAR = 'clear'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string,
    theme?: ThemeButton

}

export const Button: React.FC<ButtonProps> = ({className, children,theme, ...restProps}) => {

    return (
        <button {...restProps} className={cn(cls.Button, {}, [className, cls[theme]])}>
            {children}
        </button>
    );
};
