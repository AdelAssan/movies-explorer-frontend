import React from "react";
import {Link} from "react-router-dom";
import logo from "../../images/logo.svg";

function Register(props) {
    return (
        <section className="register">
            <Link to="/">
                <img alt="Логотип" className="header__logo register__logo" src={logo}/>
            </Link>
            <h2 className="register__welcome">Добро пожаловать!</h2>
            <form className="forms">
                <span className="forms__span">Имя</span>
                <input required type="text" className="forms__input" name="name" />
                <span className="forms__span">E-mail</span>
                <input required type="email" className="forms__input" name="email" />
                <span className="forms__span">Пароль</span>
                <input required type="password" className="forms__input" name="password" />
                <button type="submit" className="forms__button">Зарегистрироваться</button>
            </form>
            <div className="forms__question">
                <p className="forms__question-text">Уже зарегистрированы?</p>
                <Link to="/signin" className="forms__question-link">Войти</Link>
            </div>
        </section>
    );
}

export default Register;