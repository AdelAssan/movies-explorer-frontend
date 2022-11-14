import {Link, useLocation, NavLink} from "react-router-dom";
import React from "react";

function Navigation() {
    const location = useLocation();
    const [activeHamburger, setActiveHamburger] = React.useState(false);

    function handleMenuOpen() {
        setActiveHamburger(!activeHamburger);
    }

    return(<>
        <button style={{display: "flex"}}
                onClick={handleMenuOpen}
                className={activeHamburger ? 'nav__menu-button nav__menu-button_active' : 'nav__menu-button'}
                type="button"
                aria-label="кнопка меню"/>
    <nav className={activeHamburger ? 'nav__menu nav__menu_active' : 'nav__menu'}>
        <button style={{display: "flex"}}
                onClick={handleMenuOpen}
                className={activeHamburger ? 'nav__menu-button nav__menu-button_active' : 'nav__menu-button'}
                type="button"
                aria-label="кнопка меню"/>
        <a href="/" className="nav__general">Главная</a>
        <div className="nav__movies"
             style={{display: "flex"}}>
            <NavLink to="/movies" className="nav__movies-link" activeClassName="nav__movies-link_active">Фильмы</NavLink>
            <NavLink to="/saved-movies" className="nav__movies-link" activeClassName="nav__movies-link_active">Сохранённые фильмы</NavLink>
        </div>
        <Link to="/profile">
            <button
                style={{display: "flex"}}
                className="nav__account" type="button">Аккаунт</button>
        </Link>
    </nav>
    </>);
}
 export default Navigation;