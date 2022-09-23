import React from "react";
import photo from "../../images/photoAA.png";

function AboutMe(props) {
    return (
        <section className="about">
            <h2 className="main__titles">Студент</h2>
            <div className="main__border"/>
            <div className="about__container">
                <div className="about__text">
                <h3 className="about__name">Адель</h3>
                <p className="about__description">Фронтенд-разработчик</p>
                <p className="about__paragraph">Я живу в городе Нур-Султан(Астана), закончила факультет It-технологий ЕНУ. Я люблю читать,
                а еще увлекаюсь танцами, хожу в студию. В 2021 году начала курсы веб-разработчика. Сейчас в поисках работы мечты.</p>
                    <a className="about__link" target="_blank"  rel="noreferrer" href="https://github.com/AdelAssan">Github</a>
                </div>
            <img className="about__photo" src={photo} alt="Фото"/>
            </div>
            <ul className="about__portfolio">
                <li className="about__list"><p className="about__portfolio-name">Портфолио</p></li>
                <li className="about__list"><a target="_blank" href="https://adelassan.github.io/how-to-learn/"  rel="noreferrer" className="about__sites">Статичный сайт<div className="about__arrow"/></a></li>
                <li className="about__list"><a target="_blank" href="https://adelassan.github.io/russian-travel/"  rel="noreferrer" className="about__sites">Адаптивный сайт<div className="about__arrow"/></a></li>
                <li className="about__list"><a  target="_blank" href="https://adelassan.nomoredomains.sbs/"  rel="noreferrer" className="about__sites">Одностраничное приложение<div className="about__arrow"/></a></li>
            </ul>
        </section>
    );
}

export default AboutMe;