import React from 'react';
import {Link} from 'react-router-dom';
import './styles/index.scss'
import {cn} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider/lib/useTheme";
import {AppRouter} from "app/providers/router";



const App = () => {
    const {theme,toggleTheme} = useTheme()

    return (
        <div className={cn('app', {}, [theme])} >
            <button onClick={toggleTheme}>toggle</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <AppRouter />

        </div>
    );
};

export default App;
