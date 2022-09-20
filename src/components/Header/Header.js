import logo from "../../images/logo.svg";
import React from "react";
import {Link, Route, useLocation} from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header(props) {

    const location = useLocation();

    return (
        <Route path="/(|movies|saved-movies|profile)">
        <header className="header"
                style={{background: location.pathname !== "/" ? "#FFFFFF" : "#F3C1F8"}}>

            <Link to="/">
                <img alt="Логотип" className="header__logo" src={logo}/>
            </Link>
            <div className="header__buttons"
                 style={{display: location.pathname !== "/" ? "none" : "flex"}}>
                <button className="header__reg">Регистрация</button>
                <button className="header__login">Войти</button>
            </div>
           <Navigation/>
        </header>
        </Route>
    );
}

export default Header;