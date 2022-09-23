import React from "react";
import textW from "../../images/text_world.svg";

function Promo(props) {
    return (
        <section className="promo">
            <div className="promo__container">
              <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
              <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <a className="promo__btn" href="#project">Узнать больше</a>
            </div>
            <img className="promo__img" alt="Текстовый шар" src={textW}/>
        </section>
    );
}

export default Promo;