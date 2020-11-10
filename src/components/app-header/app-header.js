import React from 'react';
import './app-header.css';
import {Link} from 'react-router-dom';


const AppHeader = ({total}) => {
    return (
        <header className="header">
            <Link to="/" className ="header__link">Основной чат</Link>
            <Link to="/user" className ="header__link">Пользователь</Link>
            <Link to="/userslist" className ="header__link">Список учатсников</Link>
        </header>
    )
};


export default AppHeader;
