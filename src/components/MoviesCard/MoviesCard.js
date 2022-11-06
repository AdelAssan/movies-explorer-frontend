import React from "react";
import { useLocation } from 'react-router-dom';

function MoviesCard(props) {
    const location = useLocation();
    const isSaved = props.card.id ? props.savedMovie?.find((i) => i.movieId === props.card.id) : location.pathname === '/saved-movies';
    const hours = Math.floor(props.card.duration / 60);
    const minutes = props.card.duration % 60;

    function deleteHandler() {
        if (location.pathname === '/saved-movies') {
            props.onDelete(props.card)
        }
        if (location.pathname === '/movies')
            props.onDelete(props.savedMovie.find((i) => i.movieId === props.card.id))
    }

    function saveHandler() {
        props.onSave({
            country: String(props.card.country),
            director: props.card.director,
            duration: props.card.duration,
            year: props.card.year,
            description: props.card.description,
            image: `https://api.nomoreparties.co${props.card.image.url}`,
            trailerLink: props.card.trailerLink,
            nameRU: props.card.nameRU,
            nameEN: props.card.nameEN,
            thumbnail: `https://api.nomoreparties.co${props.card.image.formats.thumbnail.url}`,
            movieId: props.card.id,
        });
        //console.log(props.savedMovie)
    }

    return (<>
        <article className="movies-card" key={props.card.id || props.card.movieId}>
            <a className="movies-card__link"  href={props.card.trailerLink} target="_blank" rel="noreferrer">
            <img className="movies-card__img" alt={`Фотография к фильму ${props.card.nameRU}`} src={location.pathname === '/saved-movies' ? `${props.card.image}` : `https://api.nomoreparties.co${props.card.image.url}`} />
            </a>
            {location.pathname === '/saved-movies' &&
            <button className='movies-card__btn_delete movies-card__btn' type="button" onClick={deleteHandler} /> }
            {location.pathname === '/movies' &&
             <button type="button" className={isSaved ? 'movies-card__btn movies-card__btn_active' : 'movies-card__btn'} onClick={isSaved ? deleteHandler : saveHandler}
                 >{isSaved ? '' :
                 'Сохранить'}</button>

        }
            <div className="movies-card__info">
                <h2 className="movies-card__name">{props.card.name || props.card.nameRU}</h2>
                <p className="movies-card__duration">{hours !== 0 ? `${hours}ч` : ""} {minutes !== 0 ? `${minutes}м` : ""}</p>
            </div>
        </article>
    </>);
}

export default MoviesCard;