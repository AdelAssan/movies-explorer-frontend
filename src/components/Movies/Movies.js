import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import movieApi from "../../utils/MovieApi";
import {Desctop_Width, Desctop_Cards, Tablet_Width, Tablet_Cards, Mobile_Cards, Desctop_ExtraCards, TabletMobile_ExtraCards} from "../../constants/constants";

function Movies (props) {
    const [renderedMovies, setRenderedMovies] = React.useState(getSearchValue());
    const [movie, setMovie] = React.useState([]);
    const [allMovies, setAllMovies] = React.useState(JSON.parse(localStorage.getItem('allMovies')) || []);
    const [isLoading, setIsLoading] = React.useState(false);
    const [checkbox, setCheckbox] = React.useState(JSON.parse(localStorage.getItem('checkboxStatus')) || false);
    const [error, setError] = React.useState(false);
    const [width, setWidth] = React.useState(window.innerWidth);
    const [count, setCount] = React.useState(getFirstMoviesArr(width));
    const [errorMessage, setErrorMessage] = React.useState('');

    React.useEffect(() => {
        function sizeHandler() {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', sizeHandler);
        return () => window.removeEventListener('resize', sizeHandler);
    }, [width]);

    function getFirstMoviesArr(width) {
        if (width >= Desctop_Width) {
            return Desctop_Cards;
        }
        if (width >= Tablet_Width) {
            return Tablet_Cards;
        }
        else {
            return Mobile_Cards;
        }
    }

    const loadMore = (width) => {
        if (width >= Desctop_Width) {
            return Desctop_ExtraCards;
        }
        return TabletMobile_ExtraCards;
    }

    function extraMoviesHandler() {
        return setCount((firstCount) => firstCount + loadMore(width));
    }

    React.useEffect(() => {
        setError(false);
        const movies = props.onFilter(allMovies, renderedMovies, checkbox);
        const localMovieArr = (JSON.parse(localStorage.getItem('filteredMovies')) || []);
        localStorage.setItem('filteredMovies', JSON.stringify(movies));
        localStorage.setItem('checkboxStatus', checkbox);
        setMovie(localMovieArr);
        if (localMovieArr.length === 0 && renderedMovies.length > 0) {
            setIsLoading(false);
            setErrorMessage('Ничего не найдено');
            return setError(true);
        }
    }, [allMovies, checkbox])

    function onlyShortMovies() {
        setCheckbox(!checkbox);
    }

    function searchHandler(evt) {
        evt.preventDefault();
        setError(false);
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 1000);
        if (renderedMovies === '') {
            setIsLoading(false);
            setErrorMessage('Введите ключевое слово');
            return setError(true);
        }
        if (!JSON.parse(localStorage.getItem('allMovies'))) {
            movieApi.getMovies()
                .then((res) => {
                    setIsLoading(false);
                    localStorage.setItem('allMovies', JSON.stringify(res));
                    setAllMovies(res);
                    localStorage.setItem('filmSearch', renderedMovies);
                    setError(false);
                })
                .catch(() => {
                    setError(true);
                })
        }
        else {
            setAllMovies(JSON.parse(localStorage.getItem('allMovies')));
            setIsLoading(false);
            localStorage.setItem('filmSearch', renderedMovies);
        }
    }

    function getSearchValue() {
        const searchValue = localStorage.getItem('filmSearch');
        if (!searchValue) {
            return '';
        }
        return searchValue;
    }

    function onChangeHandler(evt) {
        setRenderedMovies(evt.target.value);
    }

    return (
        <main className="movies">
           <SearchForm searchHandler={searchHandler} onChangeHandler={onChangeHandler}
                       renderedMovies={renderedMovies} onlyShortMovies={onlyShortMovies} checkbox={checkbox} />
                <MoviesCardList movie={movie} isLoading={isLoading} error={error} savedMovie={props.savedMovie} errorMessage={errorMessage}
                                count={count} onDelete={props.onDelete} extraMoviesHandler={extraMoviesHandler} onSave={props.onSave}
            />
        </main>
    );
}

export default Movies;