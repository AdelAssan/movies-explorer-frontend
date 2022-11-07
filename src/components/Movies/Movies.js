import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import movieApi from "../../utils/MovieApi";
import {DESCTOP_WIDTH, DESCTOP_CARDS, TABLET_WIDTH, TABLET_CARDS, MOBILE_CARDS, DESCTOP_EXRACARDS, TABLETMOBILE_EXRACARDS} from "../../constants/constants";

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
    const [clicked, setClicked] = React.useState(false);

    React.useEffect(() => {
        function sizeHandler() {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', sizeHandler);
        return () => window.removeEventListener('resize', sizeHandler);
    }, [width]);

    function getFirstMoviesArr(width) {
        if (width >= DESCTOP_WIDTH) {
            return DESCTOP_CARDS;
        }
        if (width >= TABLET_WIDTH) {
            return TABLET_CARDS;
        }
        else {
            return MOBILE_CARDS;
        }
    }

    const loadMore = (width) => {
        if (width >= DESCTOP_WIDTH) {
            return DESCTOP_EXRACARDS;
        }
        return TABLETMOBILE_EXRACARDS;
    }

    function extraMoviesHandler() {
        return setCount((firstCount) => firstCount + loadMore(width));
    }

    React.useEffect(() => {
        setError(false);
        const moviesArr = props.onFilter(allMovies, renderedMovies, checkbox);
        localStorage.setItem('checkboxStatus', checkbox);
        localStorage.setItem('filteredMovies', JSON.stringify(moviesArr));
        const localMovieArr = (JSON.parse(localStorage.getItem('filteredMovies')) || []);
        setMovie(localMovieArr);
        if (localMovieArr.length === 0 && renderedMovies.length > 0) {
            setIsLoading(false);
            setTimeout(() => setErrorMessage('Ничего не найдено'), 500);
            return setError(true);
        }
    }, [allMovies, checkbox])

    function onlyShortMovies() {
        setCheckbox(!checkbox);
        setClicked(true);
    }

    function searchHandler(evt) {
        evt.preventDefault();
        setError(false);
        setIsLoading(true);
        if (renderedMovies === '') {
            setIsLoading(false);
            setErrorMessage('Введите ключевое слово');
            return setError(true);
        }
        if (!JSON.parse(localStorage.getItem('allMovies'))) {
            movieApi.getMovies()
                .then((res) => {
                    setIsLoading(false);
                    setAllMovies(res);
                    localStorage.setItem('allMovies', JSON.stringify(res));
                    localStorage.setItem('filmSearch', renderedMovies);
                    setError(false);
                })
                .catch(() => {
                    setError(true);
                }).finally(() => {setIsLoading(false)})
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