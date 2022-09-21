import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

function MoviesCardList(props) {
    return (
        <section className="movies-cards">
            <MoviesCard/>
            <button className="movies-cards__btn" type="button">Ещё</button>
        </section>

    );
}

export default MoviesCardList;