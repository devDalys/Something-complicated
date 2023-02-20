import React, {Suspense} from 'react';
import './styles/index.scss'
import {cn} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider/lib/useTheme";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/NavBar";
import {Sidebar} from "widgets/SideBar";



const App = () => {
    const {theme} = useTheme()

    return (
        <div className={cn('app', {}, [theme])} >
            <Suspense fallback={'Loading..'}>
                <Navbar />
                <div className='content-page'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
