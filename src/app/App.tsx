import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss'
import {cn} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider/lib/useTheme";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";



const App = () => {
    const {theme,toggleTheme} = useTheme()

    return (
        <div className={cn('app', {}, [theme])} >
            <button onClick={toggleTheme}>toggle</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={'Loading...'}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage/>}/>
                    <Route path={'/'} element={<MainPage/>}/>
                </Routes>
            </Suspense>

        </div>
    );
};

export default App;
