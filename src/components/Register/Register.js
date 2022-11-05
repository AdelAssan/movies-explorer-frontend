import React from "react";
import {Link} from "react-router-dom";
import logo from "../../images/logo.svg";
import useFormWithValidation from "../../hook/useFormWithValidation";

function Register(props) {
    const formWithValidation = useFormWithValidation();
    const {errors, isValid, resetForm, handleChange, values} = formWithValidation;
    const { name, email, password } = formWithValidation.values;

    React.useEffect(() => {
        resetForm();
    }, [resetForm]);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.handleRegister(name, email, password);
        formWithValidation.resetForm();
    };


    return (
        <section className="register">
            <Link to="/">
                <img alt="Логотип" className="header__logo register__logo" src={logo}/>
            </Link>
            <h2 className="register__welcome">Добро пожаловать!</h2>
            <form className="forms" onSubmit={handleSubmit}>
                <span className="forms__span">Имя</span>
                <input required type="text" className={`forms__input ${errors.name && 'forms__input_error'}`} name="name" minLength="2" maxLength="30" onChange={handleChange}
                       value={values.name || ''} autoComplete="off" />
                <span className="forms__error forms__span">{errors.name}</span>
                <span className="forms__span">E-mail</span>
                <input required type="email" className={`forms__input ${errors.email && 'forms__input_error'}`} name="email" onChange={handleChange}
                       value={values.email || ''} autoComplete="off" />
                <span className="forms__error forms__span">{errors.email}</span>
                <span className="forms__span">Пароль</span>
                <input required type="password" className={`forms__input ${errors.password && 'forms__input_error'}`} name="password" onChange={handleChange}
                       value={values.password || ''}  autoComplete="off"/>
                <span className="forms__error forms__span" id="error-name">{errors.password}</span>
                {props.isRegError && <span className="forms__error forms__span">Что-то пошло не так ...</span>}
                <button type="submit" className={`forms__button ${!isValid && 'forms__button_disabled'} `} disabled={!isValid}>Зарегистрироваться</button>
            </form>
            <div className="forms__question">
                <p className="forms__question-text">Уже зарегистрированы?</p>
                <Link to="/signin" className="forms__question-link">Войти</Link>
            </div>
        </section>
    );
}

export default Register;