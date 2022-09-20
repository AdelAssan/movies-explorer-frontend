import React from "react";

function Profile(props) {
    return(
      <section className="profile">
          <h2 className="profile__greetings">Привет, Виталий!</h2>
          <div className="profile__info">
              <div className="profile__name">
                  <p className="profile__text">Имя</p>
                  <p className="profile__user">Виталий</p>
              </div>
              <div className="profile__email">
                  <p className="profile__text">E-mail</p>
                  <p className="profile__user">pochta@yandex.ru</p>
              </div>
          </div>
          <a href="#" className="profile__link">Редактировать</a>
          <a href="#" className="profile__link profile__link_red">Выйти из аккаунта</a>
      </section>
    );
}

export default Profile;