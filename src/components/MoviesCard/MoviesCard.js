import React from "react";
import example from "../../images/example.png"

function MoviesCard(props) {
    return (<>

        <article className="movies-card">
            <img className="movies-card__img" alt="Фильм" src={example} />
            <button className="movies-card__btn" type="button">Сохранить</button>
            <div className="movies-card__info">
                <h2 className="movies-card__name">33 слова о дизайне</h2>
                <p className="movies-card__duration">1ч 17м</p>
            </div>
        </article>
        <article className="movies-card">
            <img className="movies-card__img" alt="Фильм" src={example} />
            <button className="movies-card__btn" type="button">Сохранить</button>
            <div className="movies-card__info">
                <h2 className="movies-card__name">33 слова о дизайне</h2>
                <p className="movies-card__duration">1ч 17м</p>
            </div>
        </article>
        <article className="movies-card">
            <img className="movies-card__img" alt="Фильм" src={example} />
            <button className="movies-card__btn movies-card__btn_active" type="button"></button>
            <div className="movies-card__info">
                <h2 className="movies-card__name">33 слова о дизайне</h2>
                <p className="movies-card__duration">1ч 17м</p>
            </div>
        </article>

    </>);
}

export default MoviesCard;