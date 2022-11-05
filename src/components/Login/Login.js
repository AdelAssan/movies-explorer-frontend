import React from "react";
import {Link} from "react-router-dom";
import logo from "../../images/logo.svg";
import useFormWithValidation from "../../hook/useFormWithValidation";

function Login(props) {
    const formWithValidation = useFormWithValidation();
    const {values, handleChange, errors, isValid, resetForm} = formWithValidation;
    const { email, password } = formWithValidation.values;

    React.useEffect(() => {
        resetForm();
    }, [resetForm]);

    const handleSubmit = (evt) => {
            evt.preventDefault();
        props.handleLogin(email, password);
        formWithValidation.resetForm();
    }

    return(
      <section className="login">
          <Link to="/">
              <img alt="Логотип" className="header__logo register__logo" src={logo}/>
          </Link>
          <h2 className="register__welcome">Рады видеть!</h2>
          <form className="forms" onSubmit={handleSubmit}>
              <span className="forms__span">E-mail</span>
              <input required type="email" className={`forms__input ${errors.email && 'forms__input_error'}`} name="email" onChange={handleChange} value={values.email || ''} autoComplete="off" />
              <span className="forms__error forms__span">{errors.email}</span>
              <span className="forms__span">Пароль</span>
              <input required type="password" className={`forms__input ${errors.password && 'forms__input_error'}`} name="password" onChange={handleChange} value={values.password || ''} autoComplete="off" />
              <span className="forms__error forms__span">{errors.password}</span>
              {props.isLoginError && <span className="forms__error forms__span">Вы не зарегестрированы</span>}
              <button type="submit" className={`forms__button ${!isValid && 'forms__button_disabled'} `} disabled={!isValid}>Войти</button>
          </form>
          <div className="forms__question">
              <p className="forms__question-text">Ещё не зарегистрированы?</p>
              <Link to="/signup" className="forms__question-link">Регистрация</Link>
          </div>
      </section>
    );
}

export default Login;