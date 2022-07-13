import React from 'react';
import {NavLink} from "react-router-dom";

function HeaderMenu() {
    return (
        <nav className="d-flex align-items-center">
            <ul id="menu">
                <NavLink className="menu__item" to="/">Céljaim</NavLink>
                <NavLink className="menu__item" to="/results">Eredményeim</NavLink>
                <NavLink className="menu__item" to="/inspiration">Inspiráció</NavLink>
                <NavLink className="menu__item" to="/motivation">Motiváció</NavLink>
                <NavLink className="menu__item" to="/training">Tréning</NavLink>
                <NavLink className="menu__item" to="/meditation">Meditáció</NavLink>
            </ul>
        </nav>
    );
}

export default HeaderMenu;