import React from 'react';
import {cn} from "shared/lib/classNames/classNames";
import cls from './AppLink.module.scss'
import {Link, LinkProps} from "react-router-dom";

export enum AppLinksTheme  {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}
interface AppLinkProps extends LinkProps{
    className?: string,
    theme?: AppLinksTheme

}

export const AppLink:React.FC<AppLinkProps> = (props) => {
    const {className,
        children,
        theme = AppLinksTheme.PRIMARY,
        to,
        ...restProps
    } = props;

    return (
        <Link {...restProps} to={to} className={cn(cls.AppLink, {}, [className, cls[theme]])}>
            {children}
        </Link>
    );
};
