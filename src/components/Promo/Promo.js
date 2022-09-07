import React from "react";
import textW from "../../images/text_world.svg";

function Promo(props) {
    return (
        <section className="promo">
            <div className="promo__container">
              <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
              <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <button className="promo__btn">Узнать больше</button>
            </div>
            <img className="promo__img" alt="" src={textW}/>
        </section>
    );
}

export default Promo;