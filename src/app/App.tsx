import React from 'react';
import {Link} from 'react-router-dom';
import './styles/index.scss'
import {cn} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider/lib/useTheme";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/NavBar";



const App = () => {
    const {theme,toggleTheme} = useTheme()

    return (
        <div className={cn('app', {}, [theme])} >
            <button onClick={toggleTheme}>toggle</button>
            <Navbar />
            <AppRouter />

        </div>
    );
};

export default App;
