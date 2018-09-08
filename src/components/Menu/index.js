import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from '../../routes'

export const Menu = () => (
    <nav>
        { routes.filter(route => route.title && route.path).map((route, index) => (
            <NavLink key={index} exact to={route.path}>{ route.title }</NavLink>
        ))}
    </nav>
);

// <nav>
//     <NavLink exact to="/">Główna</NavLink>
//     <NavLink exact to="/quiz">Quiz</NavLink>
//     <NavLink exact to="/memo">Memo</NavLink>
// </nav>
