import logo from "../../images/logo.svg";
import React from "react";
import {Link} from "react-router-dom";

function Header(props) {

    return (
        <header className="header">
            <Link to="/">
                <img alt="Логотип" className="header__logo" src={logo}/>
            </Link>
        </header>
    );
}

export default Header;