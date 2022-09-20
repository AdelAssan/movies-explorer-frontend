import React from "react";
import {Link} from "react-router-dom";
import logo from "../../images/logo.svg";

function Login(props) {
    return(
      <section className="login">
          <Link to="/">
              <img alt="Логотип" className="header__logo register__logo" src={logo}/>
          </Link>
          <h2 className="register__welcome">Рады видеть!</h2>
          <form className="forms">
              <span className="forms__span">E-mail</span>
              <input required type="email" className="forms__input" name="email" />
              <span className="forms__span">Пароль</span>
              <input required type="password" className="forms__input" name="password" />
              <span className="forms__error forms__span">Что-то пошло не так...</span>
              <button type="submit" className="forms__button">Войти</button>
          </form>
          <div className="forms__question">
              <p className="forms__question-text">Ещё не зарегистрированы?</p>
              <Link to="/signup" className="forms__question-link">Регистрация</Link>
          </div>
      </section>
    );
}

export default Login;