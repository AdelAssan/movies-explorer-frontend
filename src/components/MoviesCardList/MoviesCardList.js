import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from 'react-router-dom';
import Preloader from "../Preloader/Preloader";

function MoviesCardList(props) {
    const location = useLocation();
    return (
        <section className="movies-cards">
            {props.isLoading ? <Preloader /> :
                <>
            {location.pathname === '/movies' &&
                props.movie.slice(0, props.count)?.map((card) => (
                        <MoviesCard key={card.id} card={card} savedMovie={props.savedMovie}
                                    onDelete={props.onDelete} saveMovie={props.saveMovie} buttonDisabled={props.buttonDisabled}
                                    onSave={props.onSave}
                        />
            ))}
            {location.pathname === '/saved-movies' && props.movie?.map((card) => (
                <MoviesCard key={card.movieId} card={card} onDelete={props.onDelete} onSave={props.onSave}
                            savedMovie={props.savedMovie} saveMovie={props.saveMovie} buttonDisabled={props.buttonDisabled}/>
            ))
            }
                {location.pathname === '/movies' && props.count < props.movie.length &&
                    <button className="movies-cards__btn" onClick={props.extraMoviesHandler}>Ещё</button>
                }
            </>}
            </section>
    );
}

export default MoviesCardList;