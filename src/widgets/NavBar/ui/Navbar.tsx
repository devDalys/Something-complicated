import React from 'react';
import {cn} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import {AppLink, AppLinksTheme} from "shared/ui/AppLink/ui/AppLink";

interface NavbarProps {
    className?: string,

}

export const Navbar = ({className}: NavbarProps) => {

    return (
        <div className={cn(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinksTheme.SECONDARY} className={cls.links__item} to={'/'}>Главная</AppLink>
                <AppLink theme={AppLinksTheme.SECONDARY} className={cls.links__item} to={'/about'}>О сайте</AppLink>
            </div>
        </div>
    );
};


