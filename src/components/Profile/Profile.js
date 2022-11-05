import React from "react";
import useFormWithValidation from "../../hook/useFormWithValidation";

function Profile(props) {
    const formWithValidation = useFormWithValidation();
    const {values, handleChange, errors, isValid} = formWithValidation;
    const { name,email } = formWithValidation.values;

    const submitHandler = (evt) => {
        evt.preventDefault();
        props.handleProfileChange(name, email);
    }

    return(
      <form className="profile" onSubmit={submitHandler}>
          <h2 className="profile__greetings">Привет, {props.currentUser.name}!</h2>
          <div className="profile__info">
              <div className="profile__name">
                  <p className="profile__text">Имя</p>
                  <input className="profile__user" type="text" required minLength="2"
                  maxLength="30" name="name" value={values.name || ""} onChange={handleChange} autoComplete="off" placeholder={props.currentUser.name} />
              </div>
              <span className="forms__error forms__span">{errors.name}</span>
              <div className="profile__email">
                  <p className="profile__text">E-mail</p>
                  <input className="profile__user" type="email" required name="email"
                      autoComplete="off" value={values.email || ""} onChange={handleChange} placeholder={props.currentUser.email} />
              </div>
              <span className="forms__error forms__span">{errors.email}</span>
              { props.isChangeProfile && <span className="forms__success forms__span">Профиль успешно обновлен</span>}
              { props.isChangeError && <span className="forms__error forms__span">Что-то пошло не так ...</span>}
          </div>
          <button className={`profile__link ${!isValid && 'profile__link_disabled'} `} type="submit" disabled={!isValid}>Редактировать</button>
          <a href="#" className="profile__link profile__link_red" onClick={props.onSignOut}>Выйти из аккаунта</a>
      </form>
    );
}

export default Profile;